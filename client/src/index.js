import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import Main from './components/Main/Main';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Main />} />
        <Route path='/cats' element={<Cats />} />
        <Route path='/dogs' element={<Dogs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
