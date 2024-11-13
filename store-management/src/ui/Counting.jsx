/*eslint-disable*/

import { useLocation, useParams } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

// import { PAGE_SIZE } from "../../constants";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Counting({ count }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = !searchParams.get("page")
  //   ? 1
  //   : Number(searchParams.get("page"));

  // const pageCount = Math.ceil(count / PAGE_SIZE);

  // function nextPage() {
  //   const next = currentPage + 1;
  //   searchParams.set("page", next);
  //   setSearchParams(searchParams);
  // }

  // function prevPage() {
  //   const prev = currentPage - 1;
  //   searchParams.set("page", prev);
  //   setSearchParams(searchParams);
  // }

  // if (pageCount <= 1) return null;

  const location = useLocation();

  return (
    <div className="flex justify-end items-center">
      {/* <p className="ml-4 text-stone-800">
        Showing{" "}
        <span className="font-bold text-stone-900">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-bold text-stone-900">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-bold text-stone-900">{count}</span> results
      </p> */}
      <p className="">
        Showing all {count}{" "}
        {location.pathname === "/products" ? "products" : "datas"}
      </p>
      <div className="flex space-x-6 mr-4 mb-1">
        {/* <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center p-1 rounded-lg 
    ${
      currentPage === 1
        ? "hover:bg-stone-200 cursor-not-allowed"
        : "hover:bg-stone-400 cursor-pointer"
    }
  `}
        >
          <HiChevronLeft />
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`flex items-center p-1 rounded-lg 
    ${
      currentPage === pageCount
        ? "hover:bg-stone-200 cursor-not-allowed"
        : "hover:bg-stone-400 cursor-pointer"
    }
  `}
        >
          Next
          <HiChevronRight />
        </button> */}
      </div>
    </div>
  );
}

export default Counting;
