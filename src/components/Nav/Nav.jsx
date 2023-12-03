import styles from "./Nav.module.scss"
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.svg'
import ig from '../../assets/ig.svg'
import tg from '../../assets/tg.svg'
import wa from '../../assets/wa.svg'
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1>Организация Объединенных Кыргызских Оценщиков</h1>
        <div className={styles.social}>
          <a href="#"><img src={fb} alt="fb" /></a>
          <a href="#"><img src={ig} alt="ig" /></a>
          <a href="#"><img src={tg} alt="tg" /></a>
          <a href="#"><img src={wa} alt="wa" /></a>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={'/'}>Главная страница</NavLink>
        </li>
        <li>
          <NavLink  to={'/about'}>О нас</NavLink>
        </li>
        <li>
          <NavLink to={'/members'}>Члены объединения </NavLink>
        </li>
        <li>
          <NavLink>Новости</NavLink>
        </li>
        <li>
          <NavLink>Реестр</NavLink>
        </li>
        <li>
          <NavLink>НПА</NavLink>
        </li>
        <li>
          <NavLink>Органы управления</NavLink>
        </li>
        <li>
          <NavLink>Курсы</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
