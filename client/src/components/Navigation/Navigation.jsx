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
        </div>
      </nav>
    </>
  );
}
