const router = require('express').Router();
const { Item } = require('../db/models');

router.route('/').get((req, res) => {
  Item.findAll()
    .then(allItems => res.json(allItems))
    .catch(error => console.log(error));
});

router.post('/', async (req, res) => {
  const fileName = `${uuid.v4()}.jpeg`;
  img.mv(path.resolve(__dirname, '../..', 'public/images', fileName));
  const photoPath = `/images/${fileName}`;

  await Pet.create({
    name,
    description,
    gender,
    age,
    photo: photoPath,
    species,
  });
  Item.create(req.body)
    .then(newItem => res.status(201).json(newAnimal))
    .catch(error => res.status(500).json(error));
});

router
  .route('/:id')
  .put((req, res) => {
    const { id } = req.params;

    Animal.update(req.body, { where: { id }, returning: true })
      .then(updatedAnimal => res.json(updatedAnimal))
      .catch(error => res.status(500).json(error));
  })
  .delete((req, res) => {
    const { id } = req.params;
    Animal.destroy({ where: { id } })
      .then(data => (data ? res.json(id) : res.status(404).json(data)))
      .catch(error => res.status(500).json(error));
  });

module.exports = router;
