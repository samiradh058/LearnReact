import { Link, NavLink } from "react-router-dom";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="px- flex h-20 items-center justify-between border-b border-stone-900 bg-[#003366] py-3 text-2xl sm:px-6">
      <Link
        to="/"
        className="tracking widest text-3xl font-extrabold uppercase text-[#FFFFFF]"
      >
        My Digital Shop
      </Link>

      <div className="space-x-16 text-[#00CCCC]">
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `px-3 hover:rounded-lg hover:bg-[#00264D] hover:px-3 hover:py-2 ${
              isActive
                ? "text-[#4169E1] hover:bg-transparent"
                : "text-[#00CCCC]"
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 hover:rounded-lg hover:bg-[#00264D] hover:px-3 hover:py-2 ${
              isActive
                ? "text-[#4169E1] hover:bg-transparent"
                : "text-[#00CCCC]"
            }`
          }
        >
          About Us
        </NavLink>
      </div>

      <Username />
    </header>
  );
}

export default Header;
