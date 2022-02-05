import { useParams } from 'react-router-dom';

export default function Item() {
  const params = useParams();
  return (
    <>
      <h2>Item card</h2>
    </>
  );
}
