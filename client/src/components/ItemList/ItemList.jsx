import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { error, info } from '../../utils/toast';

function ItemList() {
  const items = useSelector(state => state.items.items);
  const itemResponseSuccess = useSelector(
    state => state.items.itemResponseSuccess
  );
  const itemResponseError = useSelector(state => state.items.itemResponseError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_ITEM_LIST' });
  }, [dispatch]);

  const deleteFetch = event => {
    const id = event.target.dataset.id;
    dispatch({ type: 'FETCH_DELETE_ITEM', payload: id });
  };

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      if (itemResponseSuccess) {
        info('Товар удален!');
      } else if (itemResponseError) {
        error('Ошибка!');
      }
    } else {
      notInitialRender.current = true;
    }
  }, [itemResponseSuccess, itemResponseError]);

  return (
    <ul>
      {items?.length &&
        items.map(item => (
          <li key={item.id}>
            {item.title}
            <Link to={`/items/${item.id}`}>Редактировать</Link>
            <button key={item.id} data-id={item.id} onClick={deleteFetch}>
              Удалить
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ItemList;
