import React from 'react';
import BasketCard from '../BasketCard/BasketCard';
import { useSelector } from 'react-redux';
import TotalItemCard from '../TotalItemCard/TotalItemCard';

function Basket(props) {

  const { basketItems } = useSelector(state => state.basketItems);

  return (
    <div>
      {basketItems.length ? basketItems.map((item) => <BasketCard key={item.id} item={item} />) : 'Нет товаров в корзине'}
      <TotalItemCard/>
    </div>
  );
}

export default Basket;
