import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { error, info } from '../../utils/toast';
import './animalsForm.scss';

function AnimalsForm() {
  const animalForm = useRef();
  const dispatch = useDispatch();
  const animalResponseSuccess = useSelector(
    state => state.items.itemResponseSuccess
  );
  const itemResponseError = useSelector(state => state.items.itemResponseError);


  const addAnimal = event => {
    event.preventDefault();

    const data = new FormData(animalForm.current);

    dispatch({ type: 'FETCH_POST_ANIMAL', payload: data });
  };

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      if (itemResponseSuccess) {
        info('Товар добавлен!');
      } else if (itemResponseError) {
        error('Ошибка!');
      }
    } else {
      notInitialRender.current = true;
    }
  }, [itemResponseSuccess, itemResponseError]);


  return (
    <div className="add-item-admin">
      <h3>Добавить питомца</h3>
      <form ref={animalForm} encType="multipart/form-data" onSubmit={addAnimal}>
      <input
          type="text"
          name="title"
          placeholder="Заголовок"
          required
        />
      <input
          type="text"
          name="description"
          placeholder="Описание"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Имя питомца"
          required
        />
        <input type="number" name="age" placeholder="Возвраст питомца" required />
        <input
          type="text"
          name="breed"
          placeholder="Порода"
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Введите собака или кошка"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Город"
          required
        />
        <input type="file" name="img" placeholder="Добавьте фото" required />
        <button type="submit" className="regular-btn admin-btn">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AnimalsForm;
