import React, { useState } from 'react';
import classes from "./Auth.module.scss";
import axios from 'axios';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8083/auth', {email, password})
    localStorage.setItem("access", res.data.access_token);
    localStorage.setItem("refresh", res.data.refresh_token);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8083/register', {email, password})
    localStorage.setItem("access", res.data.access_token);
    localStorage.setItem("refresh", res.data.refresh_token);
  };

  return (
    <div className="page">
      <form className={classes.Auth}>
        <label>
          <div>Почта</div>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <div>Пароль</div>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button onClick={handleSignIn}>Sign in</button>
        <button onClick={handleSignUp}>Sign up</button>
      </form>
    </div>
  );
}
