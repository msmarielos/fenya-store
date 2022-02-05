import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import Main from './components/Main/Main';
import ItemForm from './components/ItemForm/ItemForm';
import './index.scss';
import { store } from './redux/store';
import Food from './components/Food/Food';
import Item from './components/Item/Item';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="cats" element={<Cats />} />
          <Route path="cats/food" element={<Food />} />
          <Route path="cats/food/:foodid" element={<Item />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="items" element={<ItemForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById('root')
);
