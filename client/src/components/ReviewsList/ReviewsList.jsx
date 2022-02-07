import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ReviewsList() {
  const dispatch = useDispatch();
  const pathArr = window.location.pathname.split('/');
  const id = pathArr[pathArr.length - 1];

  const { reviews } = useSelector(state => state.reviews);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_REVIEWS', payload: id });
  }, [dispatch, id]);

  return (
    <>
      {reviews.map(item => (
        <li>{item.title}</li>
      ))}
    </>
  );
}
