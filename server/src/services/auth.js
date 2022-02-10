const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../db/models');

async function login(data) {
  const { email, password } = data;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error('Email неверный');
  }
  const isSamePassword = await bcrypt.compare(password, user.password);
  if (!isSamePassword) throw new Error('Пароль  неверный');
  return user;
}

async function createToken(data) {
  const { email, id: userId, isAdmin } = data;

  const accessToken = jwt.sign(
    { email, userId, isAdmin },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    },
  );
  return { tokenType: 'Bearer', accessToken };
}

module.exports = {
  createToken,
  login,
};
