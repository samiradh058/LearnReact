import supabase, { supabaseUrl } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    throw new Error("Products could not be loaded");
  }
  return data;
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
  console.log(sellItem);
  const { data, error } = await supabase
    .from("sells")
    .insert([sellItem])
    .select();

  if (error) {
    throw new Error("Item selling details could not be completed!");
  }

  // Decrease quantity of item when sold
  let { data: products, error: decreaseQuantityError } = await supabase
    .from("products")
    .select("quantity, price")
    .eq("id", sellItem.Item_Id);

  console.log(products);

  if (decreaseQuantityError) {
    throw new Error("Error fetching product quantity!");
  }

  if (!products || products.length === 0) {
    throw new Error("Product not found or quantity unavailable!");
  }

  const currentQuantity = products[0].quantity;
  const soldQuantity = sellItem.Quantity_Sold;

  const { error: errorDecreasingQuantity } = await supabase
    .from("products")
    .upsert({
      id: sellItem.Item_Id,
      quantity: currentQuantity - parseInt(soldQuantity),
    })
    .select();

  if (errorDecreasingQuantity) {
    throw new Error("Error during decreasing product quantity");
  }

  console.log(
    `Profit is: ${(
      soldQuantity * sellItem.S_Unit_Price -
      products[0].price * soldQuantity
    ).toFixed(2)}`
  );

  return data;
}
