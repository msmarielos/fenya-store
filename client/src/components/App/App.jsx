import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SearchPanel from '../SearchPanel/SearchPanel';
import TopPanel from '../TopPanel/TopPanel';
import './normalize.css';

function App() {
  return (
    <div className="root-container">
      <TopPanel />
      <SearchPanel />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
