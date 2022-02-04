const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);
const cors = require("cors");

const PORT = 4000;

const app = express();

const itemRouter = require("./routes/item.route")

app.use(express.static(path.join(__dirname, "public")));

const sessionConfig = {
  store: new FileStore(),
  name: "user_sid",
  secret: process.env.SESSION_SECRET ?? "test",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(expressSession(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/items', itemRouter);

app.listen(PORT, () => {
  console.log("The server is up and running on", PORT);
});