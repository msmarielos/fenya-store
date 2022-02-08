import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SearchPanel from '../SearchPanel/SearchPanel';
import TopPanel from '../TopPanel/TopPanel';
import './normalize.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasketHover from '../BasketHover/BasketHover';
import { useSelector } from 'react-redux';

function App() {
  const { show } = useSelector(state => state.modal);

  return (
    <div className="root-container">
      <TopPanel />
      <SearchPanel />
      {show ? <BasketHover /> : null}
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
