import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateItemsBasketAC,
  deleteItemsBasketAC,
} from '../../redux/actionCreators/basketAC';
import './backetCard.scss';

function BasketCard({ item }) {
  const dispatch = useDispatch();
  const { basketItems } = useSelector(state => state.basketItems);

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

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketItems));
  }, [basketItems]);

  return (
    <div className="basket-card">
      <div className="first-row">
        <div className="image">
          <img src={item.img} alt="картика" />
        </div>
        <p className="item-title">{item.title}</p>
      </div>
      <div className="second-row">
        <div className="inc-dec">
          <button
            disabled={item.count < 2 ? true : ''}
            onClick={() => decrementItem(item.id)}
            className="minus-btn"
          >
            -
          </button>
          <span className="item-count">{item.count}</span>
          <button onClick={() => incrementItem(item.id)} className="plus-btn">
            +
          </button>
        </div>

        <button onClick={() => deleteItem(item.id)} className="del-btn">
          Удалить
        </button>
        <p className="price">{item.price} ₽</p>
      </div>
    </div>
  );
}

export default BasketCard;
