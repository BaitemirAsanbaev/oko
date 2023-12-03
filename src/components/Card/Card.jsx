import img from "../../assets/card1.png";
import styles from "./Card.module.scss";
const Card = () => {
  return (
    <article className={styles.Card}>
      <img src={img} alt="card image" />
      <aside>
        <p>Акылбек Жапаров нарисовал схему "продажи" "Альфа Телекома".</p>
        <button>Читать далее</button>
      </aside>
    </article>
  );
};

export default Card;
