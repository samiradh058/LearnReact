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
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="border border-l-stone-800 border-t-stone-800 border-b-stone-800 rounded-lg px-2 py-1"
      />
      <div className="bg-stone-300 border rounded-lg border-stone-800 ml-[-4px]">
        <button className=" py-2 px-2 ">
          <HiMagnifyingGlass />
        </button>
      </div>
    </form>
  );
}

export default Search;
