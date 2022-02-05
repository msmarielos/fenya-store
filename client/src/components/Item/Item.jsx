import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Item() {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentItem } = useSelector(state => state.items);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_CURRENT_ITEM', payload: params.foodId });
  }, [dispatch, params.foodId]);

  return (
    <>
      <h2>{currentItem.title}</h2>
    </>
  );
}
