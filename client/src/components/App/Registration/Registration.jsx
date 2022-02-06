import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export function Registration(props) {
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
    } else {
      alert('Пароли не совпадают');
    }
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <input ref={nameInput} id="name" type="text" required autoFocus />
        <label htmlFor="name">Имя</label>
      </div>
      <div>
        <input ref={emailInput} id="email" type="email" required />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input ref={phoneInput} id="phone" type="text" required />
        <label htmlFor="phone">Телефон</label>
      </div>
      <div>
        <input
          ref={passwordInput}
          id="password"
          type="password"
          required
          minLength="2"
        />
        <label htmlFor="password">Пароль</label>
      </div>
      <div>
        <input
          ref={confirmPasswordInput}
          id="password"
          type="password"
          required
        />
        <label htmlFor="password">Повторите пароль</label>
      </div>
      <button>Зарегистрироваться</button>
    </form>
  );
}
