import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <nav>
        <Link to='/'>Главная</Link>
        <Link to='/cats'>Кошки</Link>
        <Link to='/dogs'>Собаки</Link>
      </nav>
    </>
  );
}
