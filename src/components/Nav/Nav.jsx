import NavItem from "./NavItem/NavItem";
import styles from "./Nav.module.scss"
const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <NavItem> home</NavItem>
        </li>
        <li>
          <NavItem> home</NavItem>
        </li>
        <li>
          <NavItem> home</NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
