import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Cats() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_CATEGORY' });
  }, []);

  return (
    <>
      <h1>Cats</h1>
      <ul>
        {categories.length && categories.map((item) => <li>{item.name}</li>)}
      </ul>
    </>
  );
}
