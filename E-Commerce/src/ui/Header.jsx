import { Link } from "react-router-dom";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="px- flex items-center justify-between border-b border-stone-900 bg-stone-200 py-3 text-2xl sm:px-6">
      <Link to="/" className="tracking widest uppercase">
        My Online Shop
      </Link>

      <div>
        <Link to="/product" className="px-20">
          Product
        </Link>
        <Link to="/about">About Us</Link>
      </div>

      <Username />
    </header>
  );
}

export default Header;
