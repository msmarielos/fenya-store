import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Item.scss';

export default function Item() {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentItem } = useSelector(state => state.items);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_CURRENT_ITEM', payload: params.foodId });
  }, [dispatch, params.foodId]);

  return (
    <>
      <div className="item-container">
        <div className="item-top">
          <div className="item-img">
            <img src={currentItem.img} alt="" />
          </div>
          <div className="item-short-description">
            <h3>{currentItem.title}</h3>
            <p className="item-price">{currentItem.price} p.</p>
            <p className="in-stock">В наличии</p>
            <button className='regular-btn'>Добавить в корзину</button>
          </div>
        </div>
        <h3>Описание товара</h3>
        <div className="item-description">{currentItem.description}</div>
      </div>
    </>
  );
}
