import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
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

  return (
    <>
      {type === 'cats' ? <h1>Корм для кошек</h1> : <h1>Корм для собак</h1>}
      <div className="items-list">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <Link to={`${window.location.pathname}/${item.id}`}>
              <img src={item.img} alt="" />
            </Link>
            <Link to={`${window.location.pathname}/${item.id}`}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
