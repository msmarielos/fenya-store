import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BulletinBoardCard from '../BulletinBoardCard/BulletinBoardCard';
import { Link } from 'react-router-dom';

function BulletinBoard() {
  const { animals } = useSelector(state => state.animals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_ANIMALS' });
  }, [dispatch]);

  return (
    <div>
      <h2>Доска объявлений</h2>
      <Link to="/addform"> Подать объявление</Link>
      {animals.length &&
        animals.map(animal => (
          <BulletinBoardCard key={animal.id} animal={animal} />
        ))}
    </div>
  );
}

export default BulletinBoard;
