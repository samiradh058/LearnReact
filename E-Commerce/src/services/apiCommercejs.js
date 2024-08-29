import Commerce from "@chec/commerce.js";

const KEY = "pk_test_58194908ade936dbe2618a567eecd1c0d638b4f41b4fd";

const commerce = new Commerce(KEY);

export async function getProducts() {
  const products = await commerce.products.list();
  return products || [];
}
