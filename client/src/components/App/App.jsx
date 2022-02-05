import { Outlet } from 'react-router-dom';
import SearchPanel from '../SearchPanel/SearchPanel';
import TopPanel from '../TopPanel/TopPanel';
import './normalize.css';

function App() {
  return (
    <div className="root-container">
      <TopPanel />
      <SearchPanel />
      <Outlet />
    </div>
  );
}

export default App;
