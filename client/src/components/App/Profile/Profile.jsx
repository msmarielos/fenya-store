import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {

  const { userAnimals, userItems  } = useSelector(state => state.users)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch({ type: 'FETCH_GET_USER_ANIMALS' })
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_USER_ORDER' })
  }, [dispatch])

console.log(userItems, 'userItems')
  return (
    <div>
    </div>
  );
}

export default Profile;
