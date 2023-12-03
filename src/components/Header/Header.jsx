import styles from "./Header.module.scss";
import img from "../../assets/header.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.innerCont}>
        <div>
          <h2>Хочешь стать частью команды? </h2>
          <p>
            Работа в оценочной компании может быть финансово выгодной. Спрос на
            квалифицированных оценщиков может быть высоким, и оценщики могут
            получать хорошую оплату за свои услуги.
          </p>
          <button>Присоединяйся!</button>
        </div>
        <article>
          <img src={img} alt="header image" />
        </article>
      </div>
    </header>
  );
};

export default Header;
