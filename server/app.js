const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 4000;

const app = express();

const registrationRouter = require('./routes/registration.router');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/reg', registrationRouter);

app.listen(PORT);
