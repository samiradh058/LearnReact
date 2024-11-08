import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSeachParams] = useSearchParams("");

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set("search", e.target.search.value);
    setSeachParams(searchParams);
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="border border-stone-800 rounded-lg px-2 py-1"
      />
      <button className="absolute right-[1px] top-1/2 transform -translate-y-1/2 text-xl bg-stone-400 py-[6px] px-2 rounded-lg">
        <HiMagnifyingGlass />
      </button>
    </form>
  );
}

export default Search;
