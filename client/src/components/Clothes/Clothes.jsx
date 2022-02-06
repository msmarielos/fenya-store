import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sortAscAC, sortDescAC } from '../../redux/actionCreators/itemsAC';

export default function Clothes() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const type = pathname.split('/')[1];

  const { items } = useSelector(state => state.items);

  useEffect(() => {
    dispatch({
      type: 'FETCH_GET_ITEMS',
      payload: {
        type: pathname.split('/')[1],
        category: pathname.split('/')[2] ?? 'all',
      },
    });
  }, [dispatch, pathname]);

  const sortAsc = () => {
    dispatch(sortAscAC());
  };

  const sortDesc = () => {
    dispatch(sortDescAC());
  };

  return (
    <>
      {type === 'cats' && <h1>Одежда для кошек</h1>}
      {type === 'dogs' && <h1>Одежда для собак</h1>}
      {type === 'clothes' && <h1>Одежда для животных</h1>}
      <div className="sort-block">
        <p>Отсортировать по цене:</p>
        <span onClick={sortDesc}>По возрастанию</span>
        <span onClick={sortAsc}>По убыванию</span>
      </div>
      <div className="items-list">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <Link to={`${window.location.pathname}/${item.id}`}>
              <img src={item.img} alt="" />
            </Link>
            <Link to={`${window.location.pathname}/${item.id}`}>
              {item.title}
            </Link>
            <p className="price">{item.price} p.</p>
          </div>
        ))}
      </div>
    </>
  );
}
