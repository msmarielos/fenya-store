import React from 'react';
import BasketCard from '../BasketCard/BasketCard';
import { useDispatch, useSelector } from 'react-redux';

function Basket(props) {

  const dispatch = useDispatch()

  return (
    <div>
      <BasketCard key={} />
    </div>
  );
}

export default Basket;
