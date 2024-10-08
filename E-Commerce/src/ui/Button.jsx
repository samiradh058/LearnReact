import { Link } from "react-router-dom";

function Button({ children, onClick, type, to }) {
  const base =
    "rounded-lg bg-red-400 px-4 py-2 text-[24px] font-semibold text-white hover:bg-red-300 hover:text-[#003366]";

  const secondary = "border-2 border-stone-300 p-2 rounded bg-stone-200 ml-4";
  const round = "rounded-full bg-red-300 p-2";

  if (type === "addToCart")
    return (
      <button className={`${base} mt-2`} onClick={onClick}>
        {children}
      </button>
    );

  if (to) {
    return (
      <Link className={base} to={to}>
        {children}
      </Link>
    );
  }

  if (type === "secondary") {
    return (
      <button className={`${secondary}`} onClick={onClick}>
        {children}
      </button>
    );
  }

  if (type === "round") {
    return (
      <button className={`${round}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
