/*eslint-disable*/

function SortProducts({ setSortCriteria }) {
  const options = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
    { value: "boughtDate-desc", label: "Sort by date (New first)" },
    { value: "boughtDate-asc", label: "Sort by date (Old first)" },
    { value: "quantity-asc", label: "Sort by quantity (Less first)" },
    { value: "quantity-desc", label: "Sort by quantity (More first)" },
  ];

  function handleSelect(e) {
    setSortCriteria(e.target.value);
  }

  return (
    <div className="flex justify-end mr-4 ">
      <select
        className="border border-stone-400 p-1 mt-1 rounded-lg"
        onChange={handleSelect}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortProducts;
