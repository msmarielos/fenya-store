const userService = require('../services/user');

async function getUser(req, res) {
  try {
    const { userId } = req;
    const user = await userService.getUserById(userId);
    res.status(200).json({
      user,
      message: 'Пользователь найден',
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}

async function updateUser(req, res) {
  try {
    const { userId } = req;
    await userService.updateUser(userId, req.body);
    const user = await userService.getUserById(userId);
    res.status(200).json({
      user,
      message: 'Данные обновлены',
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}

module.exports = { getUser, updateUser };
