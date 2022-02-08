import './SearchPanel.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { showModalAC } from '../../redux/actionCreators/modalAC';

export default function SearchPanel() {
  const dispatch = useDispatch();
  const { basketItems } = useSelector(state => state.basketItems);

  const showModal = () => {
    dispatch(showModalAC());
  };

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
            <Link
              to="/basket"
              onMouseEnter={showModal}
              onMouseLeave={showModal}
            >
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
