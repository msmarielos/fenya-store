import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  const navLinksData = [
    { url: '/', title: 'Главная' },
    { url: '/cats', title: 'Кошки' },
    { url: '/dogs', title: 'Собаки' },
    { url: '/food', title: 'Корма' },
    { url: '/toys', title: 'Игрушки' },
    { url: '/clothes', title: 'Одежда' },
    { url: '/about', title: 'О нас' },
    { url: '/login', title: 'Войти' },
    { url: '/registration', title: 'Зарегистрироваться' },
  ];
  return (
    <>
      <nav>
        <div className="container">
          {navLinksData.map(link => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active-link' : 'unactive-link'
              }
              key={link.url}
              to={link.url}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
