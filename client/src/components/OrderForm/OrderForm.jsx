import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function OrderForm(props) {

  const { basketItems } = useSelector(state => state.basketItems);
  const total = basketItems.reduce((sum, el) => sum + el.price * el.count, 0);
  const orderItem = basketItems.map((item) => {
    return {id: item.id, count: item.count}
  })


  const orderForm = useRef();
  const dispatch = useDispatch();

  const order = (event) => {
    event.preventDefault();

    console.log(orderItem, 'orderItem')

    dispatch({ type: 'FETCH_POST_ORDER_ITEMS', payload: orderItem });
  };

  
  return (
    <div>
      <h3>Оформление заказа</h3>
      <p>Заказ на сумму {total}</p>
      <form ref={orderForm} name="Order" onSubmit={order}>
        <input placeholder='Введите ваш телофон' name="phone" type='text' />
        <input placeholder='Введите ваше имя' name="name" type='text' />
        <button type="submit" >Оформить заказ</button>
      </form>
    </div>
  );
}

export default OrderForm;
