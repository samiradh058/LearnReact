import { useSearchParams } from "react-router-dom";

export default function FilterProducts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = {
    filterField: "status",
    options: [
      { value: "all", label: "All products" },
      { value: "products-remaining", label: "Products in store" },
      { value: "products-sold", label: "Products sold out" },
    ],
  };

  //   const currentFilter =
  //     searchParams.get("status") || filter.options.at(0).value;

  function handleSelect(e) {
    const value = e.target.value;
    searchParams.set(filter.filterField, value);
    // if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-end mr-4 ">
      <select
        className="border border-stone-400 p-1 mt-1 rounded-lg"
        onChange={handleSelect}
      >
        {filter.options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
