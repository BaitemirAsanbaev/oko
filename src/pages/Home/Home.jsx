import Card from "../../components/Card/Card";
import Forum from "../../components/Forum/Forum";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Form from "../../modules/Form/Form";
import styles from "./Home.module.scss";
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
        <button className={styles.more}>Показать больше</button>
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
