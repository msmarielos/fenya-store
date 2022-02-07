import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BulletinBoardCard from '../BulletinBoardCard/BulletinBoardCard';

function BulletinBoard(props) {

  
  const { animals } = useSelector(state => state.animals);
  const dispatch = useDispatch();
  console.log(animals)

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_ANIMALS' });
  }, [dispatch]);

  return (
    <div>
      <h2>Доска объявлений</h2>
      <button>Подать объявление</button>
      {animals.length
       && animals.map(animal => <BulletinBoardCard key={animal.id} animal={animal} /> )}
       
    </div>
  );
}

export default BulletinBoard;
