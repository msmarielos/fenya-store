import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import './ReviewForm.scss';

export default function ReviewForm() {
  const params = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.users);

  const [rating, setRating] = useState(5);

  const ratingChanged = value => {
    setRating(value);
  };

  const createReview = e => {
    e.preventDefault();
    const { description, title } = e.target;
    const rate = rating;
    const itemId = Number(params.id);
    dispatch({
      type: 'FETCH_POST_REVIEW',
      payload: {
        description: description.value,
        title: title.value,
        item_id: itemId,
        rating: rate,
        user_id: user.user.id,
      },
    });
  };

  return (
    <>
      <form className="review-form" onSubmit={createReview}>
        {user?.success ? (
          <>
            <h5>Оставьте свой отзыв</h5>
            <ReactStars
              count={5}
              value={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <input
              autoComplete="off"
              type="text"
              name="title"
              placeholder="Заголовок"
              required
            />
            <textarea
              name="description"
              resizable="false"
              type="text"
              placeholder="Подробное описание"
            />
            <button className="regular-btn">Оставить отзыв</button>
          </>
        ) : (
          <p>Авторизуйтесь, чтобы оставлять отзывы</p>
        )}
      </form>
    </>
  );
}
