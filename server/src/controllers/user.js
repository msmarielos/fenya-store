async function getUserInfo(req, res) {
  try {
    if (req.userId) {
      res.status(200).json({
        success: true,
        message: 'Пользователь авторизован',
        userId: req.userId,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Пользователь не авторизован',
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}

module.exports = { getUserInfo };
