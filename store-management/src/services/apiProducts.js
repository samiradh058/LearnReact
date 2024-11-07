/*eslint-disable*/

import { PAGE_SIZE } from "../../constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getProducts({ page, filter }) {
  let query = supabase
    .from("products")
    .select("*, details(*)", { count: "exact" });

  let { data, error: productFetchError, count } = await query;

  if (productFetchError) {
    throw new Error("Error fetching product details");
  }

  // // Filter
  // if (filter) {
  //   console.log(filter);
  //   console.log(filter.operator);
  //   console.log(filter.value);
  //   console.log("HELLO");
  //   if (filter.operator === "gt") {
  //     query = query.gt("details.quantity", filter.value);
  //   }
  //   // query = query.gt(
  //   //   productData[0].details.reduce((sum, item) => sum + item.quantity, 0),
  //   //   filter.value
  //   // );
  // } else if (filter.operator === "eq") {
  //   query = query.eq("details.quantity", filter.value);
  //   // query = query.eq(
  //   //   productData[0].details.reduce((sum, item) => sum + item.quantity, 0),
  //   //   filter.value
  //   // );
  // }

  if (filter) {
    data = data.filter((product) => {
      if (filter.operator === "gt") {
        return product.details.some((detail) => detail.quantity > filter.value);
      } else if (filter.operator === "eq") {
        return (
          product.details.length === 0 ||
          product.details.some((detail) => detail.quantity === filter.value)
        );
      }
    });
  }
  return { data };

  // if (page) {
  //   // Pagination
  //   const from = (page - 1) * PAGE_SIZE;
  //   const to = from + (PAGE_SIZE - 1);
  //   query = query.range(from, to);
  // }

  // const { data, error, count } = await query;
  // if (error) {
  //   throw new Error("Products could not be loaded");
  // }
  // console.log(data);
  // return { data, count };
}

export async function getProductsFromId(productId) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*, details(*)")
    // Filters
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error("Product with specified id is not found");
  }
  return product;
}

export async function createProduct(newProduct) {
  console.log(newProduct);
  const imageName = `${Math.random()}-${newProduct.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/product/${imageName}`;

  const { data: productData, error: productError } = await supabase
    .from("products")
    .insert([
      {
        name: newProduct.name,
        description: newProduct.description,
        image: imagePath,
      },
    ])
    .select();

  if (productError) {
    throw new Error("Error inserting product", productError);
  }

  const newProductId = productData ? productData[0].id : null;

  if (!newProductId) {
    throw new Error("Product ID not found.");
  }

  const { data: detailsData, error: detailsError } = await supabase
    .from("details")
    .insert([
      {
        boughtDate: newProduct.boughtDate,
        price: newProduct.price,
        quantity: newProduct.quantity,
        paid: newProduct.paid,
        productId: newProductId,
      },
    ])
    .select();

  if (detailsError) {
    throw new Error("Product could not be created");
  }

  const { error: storageError } = await supabase.storage
    .from("product")
    .upload(imageName, newProduct.image);

  if (storageError) {
    await supabase.from("prouducts").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Product image could not be uploaded and the product was not created"
    );
  }
}

export async function createBuyer(sellItem) {
  const { error: errorUpdatingSells } = await supabase
    .from("sells")
    .insert([sellItem])
    .select();

  if (errorUpdatingSells) {
    throw new Error("Item selling details could not be completed!");
  }

  // Decrease quantity of item when sold
  let { data: products, error: decreaseQuantityError } = await supabase
    .from("products")
    .select("profit, details(quantity, price)")
    .eq("id", sellItem.Item_Id);

  console.log(products);

  if (decreaseQuantityError) {
    throw new Error("Error fetching product quantity!");
  }

  if (!products || products.length === 0) {
    throw new Error("Product not found or quantity unavailable!");
  }

  const currentQuantity = products[0].details.reduce(
    (ini, acc) => ini + acc.quantity,
    0
  );
  const soldQuantity = sellItem.Quantity_Sold;
  const currentProfit = products[0].profit;

  const { data: details, error: errorFetchingDetails } = await supabase
    .from("details")
    .select("id, quantity, price, boughtDate")
    .eq("productId", sellItem.Item_Id)
    .order("boughtDate", { ascending: true })
    .limit(1);

  if (errorFetchingDetails || details.length === 0) {
    throw new Error(
      "Error fetching details or no records found:",
      errorFetchingDetails
    );
  }

  const detailRecord = details[0];

  const newQuantity = detailRecord.quantity - parseInt(soldQuantity);

  const { error: errorUpdatingDetailQuantity } = await supabase
    .from("details")
    .update({ quantity: newQuantity })
    .eq("id", detailRecord.id);

  if (errorUpdatingDetailQuantity) {
    throw new Error(
      "Error updating detail quantity:",
      errorUpdatingDetailQuantity
    );
  }

  if (newQuantity === 0) {
    const { error: errorDeletingRow } = await supabase
      .from("details")
      .delete()
      .eq("id", detailRecord.id);

    if (errorDeletingRow) {
      throw new Error(
        "Error deleting row with zero quantity:",
        errorDeletingRow
      );
    }
  }

  const { error: errorUpdatingProduct } = await supabase
    .from("products")
    .update({
      profit:
        currentProfit +
        (parseInt(soldQuantity) * sellItem.S_Unit_Price -
          detailRecord.price * parseInt(soldQuantity)),
    })
    .eq("id", sellItem.Item_Id);

  if (errorUpdatingProduct) {
    console.error("Error updating product:", errorUpdatingProduct);
  }
}

export async function addProduct(data) {
  const { data: moreProducts, error: errorAddingMore } = await supabase
    .from("details")
    .insert([
      {
        productId: Number(data.Item_Id),
        quantity: Number(data.added_Quantity),
        price: Number(data.new_Price),
        boughtDate: data.bought_New,
        paid: data.new_Paid,
      },
    ])
    .select();

  if (errorAddingMore) {
    throw new Error("More quantity could not be added");
  }
}
