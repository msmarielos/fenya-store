import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addItemsBasketAC } from '../../redux/actionCreators/basketAC';
import ReviewsList from '../ReviewsList/ReviewsList';

import './Item.scss';

export default function Item() {
  const inputItem = useRef();
  const params = useParams();
  const dispatch = useDispatch();
  const currentUrl = window.location.pathname;
  const breadcrumbs = currentUrl.split('/');

  const { currentItem } = useSelector(state => state.items);

  const addBacket = () => {
    const newItem = {...currentItem, count: +inputItem.current.value};
    dispatch(addItemsBasketAC(newItem));
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_CURRENT_ITEM', payload: params.id });
  }, [dispatch, params.id]);

  return (
    <>
      <div className="item-container">
        <div className="breadcrumbs">
          <Link to={'/'}>главная</Link>
          <span>{'>'}</span>
          <Link to={`/${breadcrumbs[1]}`}>{breadcrumbs[1]}</Link>
          <span>{'>'}</span>
          <Link
            className="current-url"
            to={`/${breadcrumbs[1]}/${breadcrumbs[2]}`}
          >
            {breadcrumbs[2]}
          </Link>
        </div>
        <div className="item-top">
          <div className="item-img">
            <img src={currentItem.img} alt="" />
          </div>
          <div className="item-short-description">
            <h3>{currentItem.title}</h3>
            {currentItem.rating ? (
              <p>
                <strong>Рейтинг</strong>:{' '}
                {currentItem.rating > 5 ? 5 : currentItem.rating}/5
              </p>
            ) : (
              <p>Недостаточно оценок для формирования рейтинга</p>
            )}

            <p className="item-price">{currentItem.price} p.</p>
            <p className="in-stock">В наличии</p>
            <input
              className="item-counter"
              type="number"
              defaultValue={1}
              ref={inputItem}
              required
            />
            <button onClick={() => addBacket()} className="regular-btn">Добавить в корзину</button>
          </div>
        </div>
        <h3>Описание товара</h3>
        <div className="item-description">{currentItem.description}</div>
        <h3>Отзывы</h3>
        <ReviewsList />
      </div>
    </>
  );
}
