import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItemsAC } from "../../redux/actionCreators/itemsAC";

function ItemForm() {
  const itemForm = useRef();
  const dispatch = useDispatch();

  const addItem = (event) => {
    event.preventDefault();

    const data = new FormData(itemForm.current);

    dispatch({ type: "FETCH_POST_ITEM", payload: data });
    // dispatch(addItemsAC(data))
  };

  return (
    <form ref={itemForm} encType="multipart/form-data" onSubmit={addItem}>
      <input type="text" name="title" placeholder="Название товара" required />
      <input type="number" name="price" placeholder="Цена товара" required />
      <input
        type="text"
        name="description"
        placeholder="Описание товара"
        required
      />
      <input type="file" name="img" placeholder="Добавьте фото" required />
      <select name="type">
        <option disabled>Выберите вид животного</option>
        <option value="cat">Кошка</option>
        <option value="dog">Собака</option>
      </select>
      <select name="category">
        <option disabled>Выберите категорию товара</option>
        <option value="food">Корм</option>
        <option value="toys">Игрушки</option>
        <option value="clothes">Одежда</option>
      </select>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default ItemForm;
