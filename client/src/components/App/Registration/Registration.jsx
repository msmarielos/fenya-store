import { useRef } from "react";
import { POST } from "../../../utils/httpMethods";
import { routesApi } from "../../../utils/routesApi";

export function Registration(props) {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    const newReview = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    if (passwordInput === confirmPasswordInput) {
      fetch(routesApi.reg, {
        method: POST,
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      alert("Пароли не совпадают"); //временно, надо сделать красиво
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
