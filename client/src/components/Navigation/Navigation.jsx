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
          <Link to="/dogs">Игрушки</Link>
          <Link to="/dogs">Одежда</Link>
          <Link to="/dogs">О нас</Link>
        </div>
      </nav>
    </>
  );
}
