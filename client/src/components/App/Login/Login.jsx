import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Login.scss';

function Login(props) {
  const emailInput = useRef();
  const passwordInput = useRef();

  const dispatch = useDispatch();

  const formHandler = event => {
    event.preventDefault();

    const user = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    dispatch({ type: 'FETCH_LOGIN_USER', payload: user });
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
