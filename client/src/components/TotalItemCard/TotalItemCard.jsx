import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearBasketAC } from '../../redux/actionCreators/basketAC';

function TotalItemCard() {
  const dispatch = useDispatch();

  const { basketItems } = useSelector(state => state.basketItems);
  const total = basketItems.reduce((sum, el) => sum + el.price * el.count, 0);

  const clearBasket = e => {
    e.preventDefault();
    dispatch(clearBasketAC());
  };

  return (
    <div className="total-item-card">
      <h4>Ваш заказ:</h4>
      <p>
        Товаров на сумму: <strong>{total}</strong> ₽
      </p>
      <button className="regular-btn login-btn">Войти</button>

      <Link to="/basket/orderform">
        <button className="regular-btn">Оформить заказ</button>
      </Link>

      <button className="regular-btn clear-btn" onClick={clearBasket}>
        Очистить корзину
      </button>
    </div>
  );
}

export default TotalItemCard;
