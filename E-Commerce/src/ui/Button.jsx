import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  const base =
    "rounded-lg bg-red-400 px-4 py-2 text-[24px] font-semibold text-white hover:bg-red-300 hover:text-[#003366]";

  if (type === "addToCart")
    return <button className={`${base} mt-2`}>{children}</button>;

  if (to) {
    return (
      <Link className={base} to={to}>
        {children}
      </Link>
    );
  }
}

export default Button;
