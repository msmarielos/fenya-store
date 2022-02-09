import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function BoardList() {
  const animals = useSelector(state => state.animals.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_ANIMALS' });
  }, [dispatch]);

  const deleteFetch = event => {
    const id = event.target.dataset.id;
    dispatch({ type: 'FETCH_DELETE_ANIMAL', payload: id });
  };

  return (
    <ul>
      {animals?.length &&
        animals.map(animal => (
          <li key={animal.id}>
            {animal.name}
            <button data-id={animal.id}>Опубликовать</button>
            <button data-id={animal.id} onClick={deleteFetch}>
              Удалить
            </button>
          </li>
        ))}
    </ul>
  );
}
