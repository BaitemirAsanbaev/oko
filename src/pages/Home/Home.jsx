import Card from '../../components/Card/Card';
import Forum from '../../components/Forum/Forum';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main className={styles.Home}>
      <Header />
      <section className={styles.cards}>
        <h2>Последние новости </h2>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
        <Link to={'news'} className={styles.more}>
          Показать больше
        </Link>
      </section>
      <div>
        <Form />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Forum />
      </div>
    </main>
  );
};

export default Home;
