import './SearchPanel.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';

export default function SearchPanel() {
  const { basketItems } = useSelector(state => state.basketItems);

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
            <Link to="/basket">
              <button className="regular-btn basket-btn">Корзина</button>
              {basketItems.length ? (
                <div className="basket-counter">
                  <span>{basketItems.length}</span>
                </div>
              ) : null}
            </Link>
          </form>
        </div>
        <Navigation />
      </div>
    </>
  );
}
