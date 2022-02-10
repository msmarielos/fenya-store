import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrederUserCard from '../../OrederUserCard/OrederUserCard';

function Profile(props) {

  const { userAnimals, userItems  } = useSelector(state => state.users)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch({ type: 'FETCH_GET_USER_ANIMALS' })
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_USER_ORDER' })
  }, [dispatch])

  console.log(userItems.userOrder?.length, 'userItems')
  return (
    <div>
      <h1>Личный кабинет</h1>
      <h3>Ваши заказы</h3>
      {userItems.userOrder ? userItems.userOrder?.map((item) => {
        return <OrederUserCard key={item.id} item={item} />
      }) : <p>Заказов нет</p> }

    </div>
  );
} 

export default Profile;
