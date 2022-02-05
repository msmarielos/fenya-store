import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sortAscAC, sortDescAC } from '../../redux/actionCreators/itemsAC';
import './Food.scss';

export default function Food() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const type = pathname.split('/')[1];

  const { items } = useSelector(state => state.items);

  useEffect(() => {
    dispatch({
      type: 'FETCH_GET_ITEMS',
      payload: {
        type: pathname.split('/')[1],
        category: pathname.split('/')[2],
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
      {type === 'cats' ? <h1>Корм для кошек</h1> : <h1>Корм для собак</h1>}
      <div className="sort-block">
        <p>Отсортировать по цене:</p>
        <span onClick={sortAsc}>По возрастанию</span>
        <span onClick={sortDesc}>По убыванию</span>
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
