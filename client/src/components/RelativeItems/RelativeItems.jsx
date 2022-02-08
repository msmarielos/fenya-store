import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './RelativeItems.scss';

export default function RelativeItems({ id }) {
  const dispatch = useDispatch();

  const { relativeItems } = useSelector(state => state.items);

  useEffect(() => {
    dispatch({ type: 'FETCH_RELATIVE_ITEMS', payload: id });
  }, []);

  return (
    <div className="relative-item-list">
      {relativeItems.map(item => (
        <div className="relative-item" key={item.id}>
          <img src={item.img} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
