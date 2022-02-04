import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

function ItemForm() {
  const itemForm = useRef();
  const dispatch = useDispatch();
  const types = useSelector(state => state.lists.types)
  const categories = useSelector(state => state.lists.categories)

  const addItem = event => {
    event.preventDefault();

    const data = new FormData(itemForm.current);

    dispatch({ type: 'FETCH_POST_ITEM', payload: data })
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_LISTS' });
  }, [dispatch]);

  return (
    <form 
    ref={itemForm} 
    encType="multipart/form-data" 
    onSubmit={addItem}
    >
      <input type="text" name="title" placeholder="Название товара" required/>
      <input type="number" name="price" placeholder="Цена товара" required/>
      <input type="text" name="description" placeholder="Описание товара" required/>
      <input type="number" name="amount" placeholder="Количество товара" required/>
      <input type="file" name="img" placeholder="Добавьте фото" required/>
      <select name="type">
        <option disabled>Выберите вид животного</option>
        {types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)}
      </select>
      <select name="category">
        <option disabled>Выберите категорию товара</option>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ItemForm;
