/* eslint-disable no-return-await */
const bcrypt = require('bcryptjs');
const { User } = require('../db/models');

async function createUser(data) {
  const {
    name, email, phone, password,
  } = data;
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
async function getUserById(id) {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error('id неверный');
  }
  return user;
}

async function updateUser(id, data) {
  const {
    name, email, phone, password,
  } = data;
  const user = await User.update(
    {
      name,
      email,
      phone,
      password,
    },
    {
      where: { id },
    },
  );
  if (!user) {
    throw new Error('Данные не изменены');
  } else {
    return user;
  }
}

module.exports = { createUser, getUserById, updateUser };
