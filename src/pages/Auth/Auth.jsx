import React, { useState } from 'react';
import classes from "./Auth.module.scss";

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add logic for signing in using the email and password state values
    console.log('Signing in with:', email, password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add logic for signing up using the email and password state values
    console.log('Signing up with:', email, password);
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
