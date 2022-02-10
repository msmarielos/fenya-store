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

  return (
    <div>
      {userItems.length ? userItems.map()}
      < OrederUserCard  />
    </div>
  );
}

export default Profile;
