import React from 'react';
import { useSelector } from 'react-redux';

function TotalItemCard(props) {

  const { basketItems } = useSelector(state => state.basketReducer);
  const total = basketItems.reduce((sum , el ) => sum + el.price * el.count, 0)
  console.log(total, 'total')

  return (
    <>
      <button>Войти</button> 
      <p>Товаров на сумму: {total} ₽</p>
      <button>Оформить {total} ₽</button>
    </>
  );
}

export default TotalItemCard;
