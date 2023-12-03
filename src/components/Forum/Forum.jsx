import { Link } from "react-router-dom";
import classes from "./Forum.module.scss";
import Message from "./Message/Message";

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
      <section className={classes.message_cont}>
        <Message />
        <Message />

        <Message />

      </section>

      <span>
        <Link to={"/forum"}>Перейти на форум</Link>
      </span>
    </div>
  );
};

export default Forum;
