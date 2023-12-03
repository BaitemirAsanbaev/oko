import React, { useContext, useState } from "react";
import classes from './SendComment.module.scss'
import { Context } from "../../main";
export default function SendComment() {
  const {commentStore} = useContext(Context).stores
  function sendComment(){
    commentStore.addComment({
      author:"user123123",
      message
    })
    setMessage("")
  }
  const [message, setMessage] = useState("")
  return (
    <div className={classes.SendComment}>
      <input
        type="text"
        name="comment"
        id="comment"
        value={message}
        placeholder="Введите комментарий"
        onChange={(e)=>setMessage(e.target.value)}
      />
      <span
        style={{
          position: "relative",
          left: "500px",
          bottom: "35px",
          cursor: "pointer",
        }}
        onClick={sendComment}
      >
        Отправить
      </span>
    </div>
  );
}
