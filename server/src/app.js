const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv-safe').config({
  allowEmptyValues: true,
});

const PORT = 4000;

const app = express();

const itemRouter = require('./routes/item.route');
const categoryRouter = require('./routes/category.route');
const listsRouter = require('./routes/lists.route');
const orderRouter = require('./routes/order.router');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');
const { isAuth } = require('./middlewares/isAuth');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/items', itemRouter);
app.use('/categories', categoryRouter);
app.use('/lists', listsRouter);
app.use('/order', isAuth, orderRouter);
app.use('/api/auth', authRouter);
app.use('/user', isAuth, userRouter);

app.listen(PORT, () => {
  console.info('The server is up and running on', PORT);
});
