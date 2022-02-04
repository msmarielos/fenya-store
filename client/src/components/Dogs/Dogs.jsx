import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Dogs() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_CATEGORY_DOGS' });
  }, [dispatch]);

  return (
    <>
      <h1>Dogs</h1>
      <ul>
        {categories.length > 0 &&
          categories.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}
