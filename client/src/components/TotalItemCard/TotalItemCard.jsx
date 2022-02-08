import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TotalItemCard(props) {
  const { basketItems } = useSelector(state => state.basketItems);
  const total = basketItems.reduce((sum, el) => sum + el.price * el.count, 0);

  return (
    <div className="total-item-card">
      <h5>Ваш заказ:</h5>
      <p>
        Товаров на сумму: <strong>{total}</strong> ₽
      </p>
      <button className="regular-btn login-btn">Войти</button>

      <Link to="/basket/orderform">
        <button className="regular-btn">Оформить заказ</button>
      </Link>
    </div>
  );
}

export default TotalItemCard;
