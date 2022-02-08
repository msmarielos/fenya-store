import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewForm from '../ReviewForm/ReviewForm';

export default function ReviewsList() {
  const dispatch = useDispatch();
  const params = useParams();

  const { reviews } = useSelector(state => state.reviews);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_REVIEWS', payload: params.id });
  }, []);

  return (
    <>
      {reviews.length ? (
        reviews.map(item => <ReviewCard key={item.id} item={item} />)
      ) : (
        <p>Отзывов пока нет</p>
      )}

      <ReviewForm />
    </>
  );
}
