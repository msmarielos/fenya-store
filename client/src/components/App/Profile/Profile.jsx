import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  const dispatch = useDispatch();

  const userFields = useSelector(state => state.users?.user);
  console.log(userFields);

  const updateProfile = event => {
    event.preventDefault();

    const user = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
    };

    if (user) {
      dispatch({ type: 'FETCH_PUT_PROFILE', payload: user });
    }
  };
  return (
    <>
      <h1>Изменить профиль</h1>
      <form onSubmit={updateProfile} className="login-form">
        <div>
          <input
            ref={nameInput}
            id="name"
            type="text"
            value={userFields?.name}
            placeholder="Имя"
            autocomplete="off"
            autoFocus
          />
        </div>
        <div>
          <input
            ref={emailInput}
            id="email"
            type="email"
            value={userFields?.email}
            placeholder="Email"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            ref={phoneInput}
            id="phone"
            type="text"
            value={userFields?.phone}
            placeholder="Телефон"
            autocomplete="off"
          />
        </div>
        <button onClick={updateProfile}>Сохранить изменения</button>
      </form>
    </>
  );
}

export default Profile;
