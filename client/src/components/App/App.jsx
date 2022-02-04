import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SearchPanel from '../SearchPanel/SearchPanel';
import TopPanel from '../TopPanel/TopPanel';
import './normalize.css';

function App() {
  return (
    <div className="root-container">
      <TopPanel />
      <SearchPanel />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
