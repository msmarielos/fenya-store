import { Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <>
      <nav>
        <div className="container">
          <Link to="/">Главная</Link>
          <Link to="/cats">Кошки</Link>
          <Link to="/dogs">Собаки</Link>
          <Link to="/food">Корма</Link>
          <Link to="/toys">Игрушки</Link>
          <Link to="/clothes">Одежда</Link>
          <Link to="/about">О нас</Link>
        </div>
      </nav>
    </>
  );
}
