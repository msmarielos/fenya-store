import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateItemsBasketAC,
  deleteItemsBasketAC,
} from '../../redux/actionCreators/basketAC';
import './backetCard.scss';

function BasketCard({ item }) {
  const dispatch = useDispatch();

  const incrementItem = id => {
    dispatch(
      updateItemsBasketAC({
        count: 1,
        id,
      })
    );
  };

  const decrementItem = id => {
    dispatch(
      updateItemsBasketAC({
        count: -1,
        id,
      })
    );
  };

  const deleteItem = id => {
    dispatch(deleteItemsBasketAC({ id }));
  };

  return (
    <div className="basket-card">
      <div className="image">
        <img src={item.img} alt="картика" />
      </div>
      <p className='item-title'>{item.title}</p>
      <button
        disabled={item.count < 2 ? true : ''}
        onClick={() => decrementItem(item.id)}
      >
        -
      </button>
      <span>{item.count}</span>
      <button onClick={() => incrementItem(item.id)}>+</button>
      <br />
      <button onClick={() => deleteItem(item.id)}>Удалить</button>
      <p>{item.price} ₽</p>
    </div>
  );
}

export default BasketCard;
