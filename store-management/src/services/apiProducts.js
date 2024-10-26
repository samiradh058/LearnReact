import { PAGE_SIZE } from "../../constants";
import supabase, { supabaseUrl } from "./supabase";

export async function getProducts({ page }) {
  let query = supabase.from("products").select("*", { count: "exact" });

  // Pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + (PAGE_SIZE - 1);
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Products could not be loaded");
  }
  console.log(count);

  return { data, count };
}

export async function getProductsFromId(productId) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    // Filters
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error("Product with specified id is not found");
  }
  return product;
}

export async function createProduct(newProduct) {
  const imageName = `${Math.random()}-${newProduct.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/product/${imageName}`;

  const { data, error } = await supabase
    .from("products")
    .insert([{ ...newProduct, image: imagePath }])
    .select();

  if (error) {
    throw new Error("Cabin could not be created");
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
    .select("quantity, price, profit")
    .eq("id", sellItem.Item_Id);

  if (decreaseQuantityError) {
    throw new Error("Error fetching product quantity!");
  }

  if (!products || products.length === 0) {
    throw new Error("Product not found or quantity unavailable!");
  }

  const currentQuantity = products[0].quantity;
  const soldQuantity = sellItem.Quantity_Sold;
  const currentProfit = products[0].profit;

  const { error: errorUpdatingQuantityandProfit } = await supabase
    .from("products")
    .upsert({
      id: sellItem.Item_Id,
      quantity: currentQuantity - parseInt(soldQuantity),
      profit:
        currentProfit +
        parseInt(
          soldQuantity * sellItem.S_Unit_Price -
            products[0].price * soldQuantity
        ),
    })
    .select();

  if (errorUpdatingQuantityandProfit) {
    throw new Error(
      "Error during decreasing product quantity and updating profit"
    );
  }
}
