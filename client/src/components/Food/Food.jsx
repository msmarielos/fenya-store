import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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
      {type === 'cats' ? (
        <>
          <h1>Корм для кошек</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Link to={`${window.location.pathname}/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1>Корм для собак</h1>
      )}
    </>
  );
}
