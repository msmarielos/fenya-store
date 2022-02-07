export default function ReviewCard({ item }) {
  return (
    <>
      <h5>{item.title}</h5>
      <p>Оценка: {item.rating}</p>
      <p>{item.description}</p>
      <hr />
    </>
  );
}
