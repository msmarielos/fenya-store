import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ItemList() {

  const itemslist = useSelector(state => state.items.itemslist)
  console.log(itemslist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_ITEM_LIST' })
  }, [dispatch])

  return (
    <>
    <ul>
      {itemslist?.length ? itemslist.map(item => <li key={item.id}>{item.title}
          <Link to={`/items/${item.id}`}>Редактировать</Link>
          <button>Удалить</button>
        </li>) : <div>None!</div>}
    </ul>
    </>
  );
}

export default ItemList;
