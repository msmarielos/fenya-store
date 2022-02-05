import React from 'react';
import { useSelector } from 'react-redux';
import {  Link } from "react-router-dom";

function TotalItemCard(props) {
  const { basketItems } = useSelector(state => state.basketItems);
  const total = basketItems.reduce((sum, el) => sum + el.price * el.count, 0);
  console.log(total, 'total');

  return (
    <>
      <button>Войти</button>
      <p>Товаров на сумму: {total} ₽</p>
      <button><Link to='orderform'>Оформить заказ {total} </Link></button>
    </>
  );
}

export default TotalItemCard;
