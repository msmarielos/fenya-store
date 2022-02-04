import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import TopPanel from '../TopPanel/TopPanel';
import './normalize.css';

function App() {
  return (
    <>
      <TopPanel />
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
