import { useRef } from 'react';

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
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <input ref={emailInput} id="email" type="email" required />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input ref={passwordInput} id="password" type="password" required />
        <label htmlFor="password">Пароль</label>
      </div>
      <button>Войти</button>
    </form>
  );
}

export default Login;
