import Commerce from "@chec/commerce.js";

function AppLayout() {
  const commerce = new Commerce(
    "pk_test_58194908ade936dbe2618a567eecd1c0d638b4f41b4fd",
  );

  commerce.products.list().then((product) => console.log(product));

  commerce.products
    .list({
      query: "bag",
    })
    .then((response) => console.log(response));

  return <div>Main App</div>;
}

export default AppLayout;
