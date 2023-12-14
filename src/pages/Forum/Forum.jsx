import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./Forum.module.scss";
function Forum() {
  const [messages, setMessages] = useState([]);
  const [comment, setComment] = useState("");
  async function sendMessage() {
    try {
      const res = await axios.post(
        "http://localhost:8083/user/comment/create",
        { text: comment, userEmail: localStorage.getItem("email") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setMessages([...messages, {text:comment, user:{email:localStorage.getItem("email")}}]);
      setComment("")
    }
  }
  async function getMessages() {
    try {
      const res = await axios.get("http://localhost:8083/user/comment/getAll");
      setMessages(res.data);
      console.log(res.data[0].user.email);
    } catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    getMessages();
  }, [comment]);
  return (
    <div className={`page ${classes.Forum}`}>
      <div>
        <div className={classes.messages}>
          {messages.map((i, id) => {
            return <div key={id}>
              <small>{i.user.email}</small>
              <div>{i.text}</div>
            </div>;
          })}
        </div>
        <input
        value={comment}
          type="text"
          name="comment"
          id="comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Forum;
