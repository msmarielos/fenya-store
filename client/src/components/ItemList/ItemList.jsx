import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ItemList() {

  const itemslist = useSelector(state => state.items.itemslist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_ITEM_LIST' })
  }, [dispatch])

  const deleteFetch = (event) => {
    const id = event.target.dataset.id;
    dispatch({ type: 'FETCH_DELETE_ITEM', payload: id })
  }

  return (
    <>
    <ul>
      {itemslist?.length && itemslist.map(item => <li key={item.id}>{item.title}
          <Link to={`/items/${item.id}`}>Редактировать</Link>
          <button data-id={item.id} onClick={deleteFetch}>Удалить</button>
        </li>)}
    </ul>
    </>
  );
}

export default ItemList;
