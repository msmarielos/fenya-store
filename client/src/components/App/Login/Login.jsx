import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login(props) {
  const emailInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formHandler = event => {
    event.preventDefault();

    const user = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    if (user) {
      dispatch({ type: 'FETCH_LOGIN_USER', payload: user });
      alert('Успешная авторизация');
      navigate('/profile');
    }
  };
  return (
    <>
      <h1>Войти в личный кабинет</h1>
      <form onSubmit={formHandler} className="login-form">
        <input
          ref={emailInput}
          id="email"
          type="email"
          placeholder="Логин"
          required
        />

        <input
          ref={passwordInput}
          id="password"
          type="password"
          placeholder="Пароль"
          required
        />

        <button className="regular-btn login-btn">Войти</button>
      </form>
    </>
  );
}

export default Login;
