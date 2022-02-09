import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function Registration() {
  const navigate = useNavigate();

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const dispatch = useDispatch();

  const formHandler = event => {
    event.preventDefault();

    const newUser = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      password: passwordInput.current.value,
    };

    if (passwordInput.current.value === confirmPasswordInput.current.value) {
      dispatch({ type: 'FETCH_CREATE_USER', payload: newUser });
      navigate('/login');
    } else {
      alert('Пароли не совпадают');
    }
  };

  return (
    <>
      <h1>Зарегистрироваться</h1>
      <form onSubmit={formHandler} className="login-form">
        <div>
          <input
            ref={nameInput}
            id="name"
            type="text"
            placeholder="Имя"
            required
            autoFocus
          />
        </div>
        <div>
          <input
            ref={emailInput}
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            ref={phoneInput}
            id="phone"
            type="text"
            placeholder="Телефон"
            required
          />
        </div>
        <div>
          <input
            ref={passwordInput}
            id="password"
            type="password"
            placeholder="Пароль"
            required
            minLength="8"
          />
        </div>
        <div>
          <input
            ref={confirmPasswordInput}
            id="password"
            type="password"
            placeholder="Повторите пароль"
            required
          />
        </div>
        <button className="regular-btn login-btn">Зарегистрироваться</button>
      </form>
    </>
  );
}
