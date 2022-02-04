const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  //     try {
  //       const findUser = await User.findOne({
  //         where: {
  //           email,
  //         },
  //       });

  //       if (findUser) {
  //         res.status(401).json({ message: "Такой пользователь уже существует" });
  //         return;
  //       }
  //     } catch (error) {
  //       res
  //         .status(500)
  //         .json({ message: "Ошибка базы данных", error: error.message });
  //     }
  //     try {
  //       const hashPas = await bcrypt.hash(password, 10);
  //       const newUser = await User.create({
  //         name,
  //         email,
  //         password: hashPas,
  //       });
  //       //здесь могли быть токены
  //       res.json({ isSession: true, name, email });
  //     } catch (error) {
  //       res.status(501).json({ message: "Ошибка" });
  //     }
  //   });
});
module.export = router;
