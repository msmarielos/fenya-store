import './SearchPanel.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function SearchPanel() {
  return (
    <>
      <div className="search-panel">
        <div className="search-container">
          <div className="logo">
            <Link to={'/'}>
              <h1>Fenya Store</h1>
            </Link>
            <p>Интернет зоомагазин</p>
          </div>
          <form>
            <input className="search-input" type="text" placeholder="Поиск" />
            <button className="regular-btn">Корзина</button>
          </form>
        </div>
        <Navigation />
      </div>
    </>
  );
}
