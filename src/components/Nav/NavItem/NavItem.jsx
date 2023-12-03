import { NavLink } from "react-router-dom";

const NavItem = ({ children }) => {
console.log(children)
  return <NavLink to={children}>{children}</NavLink>;
};

export default NavItem;
