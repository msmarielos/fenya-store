import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearBasketAC } from '../../redux/actionCreators/basketAC';
import { info } from '../../utils/toast';
import './OrderForm.scss';

function OrderForm() {
  const navigate = useNavigate();

  const { basketItems } = useSelector(state => state.basketItems);
  const total = basketItems.reduce((sum, el) => sum + el.price * el.count, 0);
  const orderItem = basketItems.map(item => {
    return { id: item.id, count: item.count };
  });

  const orderForm = useRef();
  const dispatch = useDispatch();

  const order = event => {
    event.preventDefault();

    dispatch({ type: 'FETCH_POST_ORDER_ITEMS', payload: orderItem });
    navigate('/');
    info('Ваш заказ оформлен');
    dispatch(clearBasketAC());
  };

  return (
    <div>
      <h1>Оформление заказа</h1>
      {total ? (
        <p>
          Заказ на сумму <strong>{total}</strong> ₽
        </p>
      ) : (
        <p>Ваша корзина пуста.</p>
      )}

      <form
        ref={orderForm}
        name="Order"
        onSubmit={order}
        className="order-form"
      >
        <input
          autoComplete="off"
          placeholder="Введите ваш телефон"
          name="phone"
          type="text"
          required
        />
        <input
          autoComplete="off"
          placeholder="Введите ваше имя"
          name="name"
          type="text"
          required
        />
        <button type="submit" className="regular-btn">
          Оформить заказ
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
