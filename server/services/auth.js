const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../src/db/models');

async function login(data) {
  try {
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
    if (!isSamePassword) throw new Error('Пароль не некорректный');
    return user;
  } catch (e) {
    throw e;
  }
}

async function createToken(data) {
  const { email, id: userId } = data;
  try {
    const accessToken = jwt.sign({ email, userId }, process.env.ACCESS_TOKEN, {
      expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    });
    return { tokenType: 'Bearer', accessToken };
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createToken,
  login,
};
