import { useLocation } from 'react-router-dom';

export default function Food() {
  const { pathname } = useLocation();
  const type = pathname.split('/')[1];
  return (
    <>{type === 'cats' ? <h1>Корм для кошек</h1> : <h1>Корм для собак</h1>}</>
  );
}
