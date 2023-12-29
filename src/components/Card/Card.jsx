import { Link } from 'react-router-dom';
import img from '../../assets/card1.png';
import styles from './Card.module.scss';
const Card = ({ to }) => {
  return (
    <article className={styles.Card}>
      <img src={img} alt="card image" />
      <aside>
        <p>Акылбек Жапаров нарисовал схему "продажи" "Альфа Телекома".</p>
        <Link to={to}>Читать далее</Link>
      </aside>
    </article>
  );
};

export default Card;
