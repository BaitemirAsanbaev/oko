import classes from "./Message.module.scss";
import avatar from "../../../assets/react.svg";
const Message = () => {
  return (
    <div className={classes.messages}>
      <article>
        <img src={avatar} alt="" />
        <div>
          <h4>title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </article>
    </div>
  );
};

export default Message;
