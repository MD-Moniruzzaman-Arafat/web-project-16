import { NavLink } from "react-router";

const Menu = () => {
  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Properties</a>
      </li>
      <li>
        <a>Services</a>
      </li>
    </>
  );
};

export default Menu;
