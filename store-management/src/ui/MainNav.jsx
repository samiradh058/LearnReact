import { NavLink } from "react-router-dom";
import { HiHome, HiCloudArrowDown, HiMiniCircleStack } from "react-icons/hi2";
import classNames from "classnames";

function MainNav() {
  const navLinkStyles = ({ isActive }) =>
    classNames("navLinkStyles", {
      navLinkActive: isActive,
      navLinkInactive: !isActive,
    });

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <NavLink to="/dashboard" className={navLinkStyles}>
          <HiHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className={navLinkStyles}>
          <HiMiniCircleStack />
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/buy" className={navLinkStyles}>
          <HiCloudArrowDown />
          Bought (New Item)
        </NavLink>
      </li>
      <li>
        {/* <NavLink to="/sold" className={navLinkStyles}>
          <HiCloudArrowUp />
          Sold
        </NavLink> */}
      </li>
    </ul>
  );
}

export default MainNav;
