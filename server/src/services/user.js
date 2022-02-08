/* eslint-disable no-return-await */
const bcrypt = require('bcryptjs');
const { User } = require('../db/models');

async function createUser(data) {
  const { name, email, phone, password } = data;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    phone,
    password: hashPassword,
  };
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    throw new Error({ message: 'Такой пользователь уже существует' });
  }
  return await User.create(newUser);
}
//TODO `поменять название`
async function user(data) {
  try {
    const { email } = data;
    const profile = await User.findOne({
      where: {
        email,
      },
    });
    if (!profile) {
      throw new Error('Email неверный');
    }
  } catch (err) {
    throw err.message;
  }
}

module.exports = { createUser, user };
