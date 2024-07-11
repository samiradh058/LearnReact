import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/app">Go to App</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
