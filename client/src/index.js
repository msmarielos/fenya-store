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
import { Registration } from './components/App/Registration/Registration';
import Item from './components/Item/Item';
import OrderForm from './components/OrderForm/OrderForm';
import Login from './components/App/Login/Login';

import AdminNav from './components/AdminNav/AdminNav';
import ItemList from './components/ItemList/ItemList';
import ItemEditForm from './components/ItemEditForm/ItemEditForm';
import Category from './components/Category/Category';
import About from './components/About/About';
import OrderList from './components/OrderList/OrderList';
import BulletinBoard from './components/BulletinBoard/BulletinBoard';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />

          <Route path="cats" element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />

          <Route path=":category" element={<Category />} />
          <Route path="cats/:category" element={<Category />} />
          <Route path="dogs/:category" element={<Category />} />

          <Route path=":category/:id" element={<Item />} />
          <Route path="cats/:category/:id" element={<Item />} />
          <Route path="dogs/:category/:id" element={<Item />} />

          <Route path="items/add" element={<ItemForm />} />
          <Route path="items" element={<ItemList />} />
          <Route path="items/:id" element={<ItemEditForm />} />
          <Route path="orders" element={<OrderList />} />

          <Route path="admin" element={<AdminNav />} />
          <Route path="basket" element={<Basket />} />
          <Route path="basket/orderform" element={<OrderForm />} />
          <Route path="board" element={<BulletinBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
