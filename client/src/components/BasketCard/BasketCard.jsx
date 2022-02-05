import React from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { updateItemsBasketAC, deleteItemsBasketAC } from '../../redux/actionCreators/basketAC';

function BasketCard({ item }) {
   
  const dispatch = useDispatch();

  const incrementItem = (id) => {
    dispatch(updateItemsBasketAC({
      count: 1,
      id
    }))
  }


  const decrementItem = (id) => {
    dispatch(updateItemsBasketAC({
      count: -1,
      id
    }))
  }

  const deleteItem = (id) => {
    dispatch(deleteItemsBasketAC({id}))
  }

  return (
    <> 
      <p>{item.title}</p>
      <div className='image'>
        <img  src='https://i.playground.ru/i/wiki/20580/content/vq2vo862.png' alt='картика'/>
      </div>  
      <button disabled={ item.count < 2 ? true :""} onClick={() => decrementItem(item.id)}>-</button><span>{item.count}</span><button onClick={() => incrementItem(item.id)}>+</button><br/>
      <button onClick={() => deleteItem(item.id)}>Удалить</button>
      <p></p>
      <p>{item.price} ₽</p>
    </>
=======

function BasketCard(props) {
  return (
    <div>
      <img src='https://steamuserimages-a.akamaihd.net/ugc/456362427316098080/3C28639018563A1AE744375C0B37C84C6FCCE500/' alt='картика'/>
      <button>+</button>
      <button>-</button>
      <button>Удалить</button>
      <p></p>
      <p>руб</p>
    </div>
>>>>>>> 9131a14132b99d0549f1af743ad769cd8a7d34cc
  );
}

export default BasketCard;
