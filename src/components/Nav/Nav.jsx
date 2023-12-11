import styles from "./Nav.module.scss";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import tg from "../../assets/tg.svg";
import wa from "../../assets/wa.svg";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "../Dropdown/Dropdown";
const Nav = () => {
  async function logout(){
    localStorage.clear()
    location.reload()
  }
  return (
    <nav className={styles.Nav}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1>Организация Объединенных Кыргызских Оценщиков</h1>
        <div className={styles.social}>
          <a href="#">
            <img src={fb} alt="fb" />
          </a>
          <a href="#">
            <img src={ig} alt="ig" />
          </a>
          <a href="#">
            <img src={tg} alt="tg" />
          </a>
          <a href="#">
            <img src={wa} alt="wa" />
          </a>
        </div>
        <div>
          {localStorage.getItem("access") ? (
            <Link onClick={logout} to={"/"}>Logout</Link>
          ) : (
            <Link to={"/auth"}>Auth</Link>
          )}
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>Главная страница</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>О нас</NavLink>
        </li>
        <li>
          <DropdownMenu
            title={"Члены объединения"}
            options={[
              { value: "/members/1", label: "Члены объединения 1" },
              { value: "/members/2", label: "Члены объединения 2" },
              { value: "/members/3", label: "Члены объединения 3" },
            ]}
          ></DropdownMenu>
        </li>
        <li>
          <DropdownMenu
            title={"Новости"}
            options={[
              { value: "/news", label: "Новости" },
              { value: "/vacancies", label: "Вакансии" },
            ]}
          ></DropdownMenu>
        </li>
        <li>
          <DropdownMenu
            title={"____Реестр____"}
            options={[
              {
                value: "/reestr/spisok-chlenov",
                label: "Список членов объединения",
              },
              {
                value: "/reestr/slps",
                label: "Список людей получивших сертификат",
              },
              { value: "/reestr/sok", label: "Список оценочных компаний" },
              { value: "/reestr/soip", label: "Список оценщиков ИП" },
            ]}
          ></DropdownMenu>
        </li>
        <li>
          <NavLink to={"/npa"}>НПА</NavLink>
        </li>
        <li>
          <NavLink to={"/organs"}>Органы управления</NavLink>
        </li>
        <li>
          <NavLink to={"/courses"}>Курсы</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
