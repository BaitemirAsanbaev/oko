import { Link } from "react-router-dom";
import classes from "./Forum.module.scss";
import forum from '../../assets/forum banner.avif'
const Forum = () => {
  return (
    <div className={classes.Forum}>
      <section className={classes.header}>
        <h2>Наш онлайн форум! </h2>
        <p>
          На форуме ты сможешь найти своих единомышленников и быть в курсе
          последних событий
        </p>
      </section>
      <section className={classes.banner}>
        <img src={forum}/>
      </section>

          <Link className={classes.btn} to={"/forum"}>
            Перейти на форум
          </Link>
    </div>
  );
};

export default Forum;
