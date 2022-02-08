import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function RelativeItems({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RELATIVE_ITEMS', payload: { id } });
  }, []);

  return (
    <>
      <p>relative items</p>
    </>
  );
}
