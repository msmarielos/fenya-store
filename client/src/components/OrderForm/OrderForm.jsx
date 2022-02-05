import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from "react-router-dom";

function OrderForm(props) {

  const { basketItems } = useSelector(state => state.basketItems);
  const total = basketItems.reduce((sum, el) => sum + el.price * el.count, 0);


  const orderForm = useRef();
  const dispatch = useDispatch();

  const order = (event) => {
    event.preventDefault();

    // const data = new FormData(orderForm.current);
    console.log(event.target.phone.value, 'event.target')

    // dispatch({ type: 'FETCH_POST_ITEM', payload: data });
  };

  
  return (
    <div>
      <h3>Оформление заказа</h3>
      <form ref={orderForm} name="Order" onSubmit={order}>
        <input placeholder='Введите ваш телофон' name="phone" type='text' />
        <input placeholder='Введите ваше имя' name="name" type='text' />
        <button type="submit" >Оформить заказ</button>
      </form>
    </div>
  );
}

export default OrderForm;
