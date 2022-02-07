import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './ReviewForm.scss';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const ratingChanged = value => {
    setRating(value);
  };
  return (
    <>
      <form className="review-form">
        <h5>Оставьте свой отзыв</h5>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        <input type="text" placeholder="Заголовок" required />
        <textarea
          resizable="false"
          type="text"
          placeholder="Подробное описание"
        />
        <button className="regular-btn">Оставить отзыв</button>
      </form>
    </>
  );
}
