import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ReviewsList() {
  const dispatch = useDispatch();
  const pathArr = window.location.pathname.split('/');
  const id = pathArr[pathArr.length - 1];

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_REVIEWS', payload: id });
  }, [dispatch, id]);

  return <>123</>;
}
