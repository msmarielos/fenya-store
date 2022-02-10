import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {

  const { userAnimals } = useSelector(state => state.users)
  const dispatch = useDispatch()
  console.log(userAnimals, 'userAnimals');
  
  useEffect(() => {
    dispatch({ type: 'FETCH_GET_USER_ANIMALS' })
  }, [dispatch])


  return (
    <div>
    </div>
  );
}

export default Profile;
