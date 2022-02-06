import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemEditForm() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const editForm = useRef()

  const currentItem = useSelector(state => state.items.currentItem);

  useEffect(() => {
    dispatch({ type: 'FETCH_GET_CURRENT_ITEM', payload: id });
  }, [dispatch, id]);

  const editItem = (event) => {
    event.preventDefault()

    const editedItem = new FormData(editForm.current);

    dispatch({ type: 'FETCH_PUT_ITEM', payload: editedItem })
  }

  return (
    <div>
      <form onSubmit={editItem} ref={editForm} encType="multipart/form-data">
      <textarea type="text" name="title" defaultValue={currentItem.title} />
      <input type="number" name="price" defaultValue={currentItem.price} />
      <input
        type="text"
        name="description"
        defaultValue={currentItem.description}
      />
      <input
        type="number"
        name="amount"
        defaultValue={currentItem.amount}
      />
        <button type='submit'>
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default ItemEditForm;