import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateItemsBasketAC,
  deleteItemsBasketAC,
} from '../../redux/actionCreators/basketAC';

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
    <>
      <p>{item.title}</p>
      <div className="image">
        <img
          src="https://i.playground.ru/i/wiki/20580/content/vq2vo862.png"
          alt="картика"
        />
      </div>
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
    </>
  );
}

export default BasketCard;
