import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sortAscAC, sortDescAC } from '../../redux/actionCreators/itemsAC';
import { addItemsBasketAC } from '../../redux/actionCreators/basketAC';
import { info } from '../../utils/toast';
import './Category.scss';

export default function Category() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { items } = useSelector(state => state.items);
  const { basketItems } = useSelector(state => state.basketItems);

  useEffect(() => {
    dispatch({
      type: 'FETCH_GET_ITEMS',
      payload: {
        type: pathname.split('/')[1],
        category: pathname.split('/')[2] ?? 'all',
      },
    });
  }, [dispatch, pathname]);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketItems));
  }, [basketItems]);

  const sortAsc = () => {
    dispatch(sortAscAC());
  };

  const sortDesc = () => {
    dispatch(sortDescAC());
  };

  const addBacket = e => {
    e.preventDefault();
    const idArr = e.target.pathname.split('/');
    const id = Number(idArr[idArr.length - 1]);
    const currentItem = items.find(item => item.id === id);
    const newItem = { ...currentItem, count: +1 };
    dispatch(addItemsBasketAC(newItem));
    info('Товар добавлен в корзину');
  };

  return (
    <>
      {pathname === '/cats/toys' && <h1>Игрушки для кошек</h1>}
      {pathname === '/cats/food' && <h1>Еда для кошек</h1>}
      {pathname === '/cats/clothes' && <h1>Одежда и аксессуары для кошек</h1>}
      {pathname === '/dogs/toys' && <h1>Игрушки для собак</h1>}
      {pathname === '/dogs/food' && <h1>Еда для собак</h1>}
      {pathname === '/dogs/clothes' && <h1>Одежда и аксессуары для собак</h1>}
      {pathname === '/toys' && <h1>Игрушки для животных</h1>}
      {pathname === '/food' && <h1>Еда для животных</h1>}
      {pathname === '/clothes' && <h1>Одежда и аксессуары для животных</h1>}

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
            <div className="price-buy">
              <p className="price">{item.price} ₽</p>

              <button className="empty-btn">
                <a
                  href={`${window.location.pathname}/${item.id}`}
                  onClick={addBacket}
                >
                  Купить
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
