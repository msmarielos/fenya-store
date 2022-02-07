import ReactStars from 'react-rating-stars-component';

export default function ReviewCard({ item }) {
  return (
    <>
      <h5>{item.title}</h5>
      <ReactStars
        value={item.rating}
        size={24}
        edit={false}
        activeColor="#ffd700"
      />
      <p>{item.description}</p>
      <hr />
    </>
  );
}
