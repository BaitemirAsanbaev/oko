import React, { useState } from 'react';
import classes from './Auth.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const EmailINP = (e) => {
    setEmail(e.target.value);
  };

  const PasswordINP = (e) => {
    setPassword(e.target.value);
  };

  const SignIn = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8083/auth', { email, password });
    localStorage.setItem('access', res.data.access_token);
    localStorage.setItem('refresh', res.data.refresh_token);
    localStorage.setItem('email', email);
    navigate('/');
    location.reload();
  };

  const SignUp = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8083/register', { email, password });
    localStorage.setItem('access', res.data.access_token);
    localStorage.setItem('refresh', res.data.refresh_token);
    localStorage.setItem('email', email);
    navigate('/');
    location.reload();
  };

  return (
    <div className="page">
      <form className={classes.Auth}>
        <label>
          <div>Почта</div>
          <input type="email" value={email} onChange={EmailINP} />
        </label>
        <label>
          <div>Пароль</div>
          <input type="password" value={password} onChange={PasswordINP} />
        </label>
        <button onClick={SignIn}>Sign in</button>
        <button onClick={SignUp}>Sign up</button>
      </form>
    </div>
  );
}
