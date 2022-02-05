import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import Main from './components/Main/Main';
import ItemForm from './components/ItemForm/ItemForm';
import Basket from './components/Basket/Basket';
import './index.scss';
import { store } from './redux/store';
import Food from './components/Food/Food';
import Item from './components/Item/Item';
import Toys from './components/Toys/Toys';
import Clothes from './components/Clothes/Clothes';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />

          <Route path="cats" element={<Cats />} />
          <Route path="cats/food" element={<Food />} />
          <Route path="cats/toys" element={<Toys />} />
          <Route path="cats/clothes" element={<Clothes />} />
          <Route path="cats/food/:foodId" element={<Item />} />

          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/food" element={<Food />} />
          <Route path="dogs/toys" element={<Toys />} />
          <Route path="dogs/clothes" element={<Clothes />} />
          <Route path="dogs/food/:foodId" element={<Item />} />

          <Route path="food" element={<Food />} />
          <Route path="items" element={<ItemForm />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById('root')
);
