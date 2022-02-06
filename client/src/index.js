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
import AdminNav from './components/AdminNav/AdminNav';
import ItemList from './components/ItemList/ItemList';
import ItemEditForm from './components/ItemEditForm/ItemEditForm';
import Category from './components/Category/Category';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="cats" element={<Cats />} />
          <Route path="cats/food" element={<Category />} />
          <Route path="cats/toys" element={<Category />} />
          <Route path="cats/clothes" element={<Category />} />
          <Route path="cats/food/:id" element={<Item />} />
          <Route path="cats/toys/:id" element={<Item />} />
          <Route path="cats/clothes/:id" element={<Item />} />

          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/food" element={<Category />} />
          <Route path="dogs/toys" element={<Category />} />
          <Route path="dogs/clothes" element={<Category />} />
          <Route path="dogs/toys/:id" element={<Item />} />
          <Route path="dogs/food/:id" element={<Item />} />
          <Route path="dogs/clothes/:id" element={<Item />} />

          <Route path="food" element={<Category />} />
          <Route path="toys" element={<Category />} />
          <Route path="clothes" element={<Category />} />
          <Route path="food/:id" element={<Item />} />
          <Route path="toys/:id" element={<Item />} />
          <Route path="clothes/:id" element={<Item />} />

          <Route path="items/add" element={<ItemForm />} />
          <Route path="items" element={<ItemList />} />
          <Route path="items/:id" element={<ItemEditForm />} />

          <Route path="admin" element={<AdminNav />} />
          <Route path="basket" element={<Basket />} />
          <Route path="basket/orderform" element={<OrderForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById('root')
);
