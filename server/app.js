// const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const cookieParser = require("cookie-parser");
// const expressSession = require("express-session");
// const FileStore = require("session-file-store")(expressSession);
const cors = require('cors');

const PORT = 4000;

const app = express();

// app.use(express.static(path.join(__dirname, "public")));

const registrationRouter = require('./routes/registration.router');

// const sessionConfig = {
//   store: new FileStore(),
//   name: "user_sid",
//   secret: process.env.SESSION_SECRET ?? "test",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 12,
//     httpOnly: true,
//   },
// };

app.use(cors());
app.use(morgan('dev'));
// app.use(cookieParser());
// app.use(expressSession(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/reg', registrationRouter);

// app.use('/api/reg', (req, res) => {
//   const { body } = req;
//   console.log(body);
// });

app.listen(PORT, () => {
  console.info('The server is up and running on', PORT);
});
