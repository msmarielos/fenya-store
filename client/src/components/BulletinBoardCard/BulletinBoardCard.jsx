import React from 'react';

function BulletinBoardCard({ animal }) {

  return (
    <div>
      <h4>{animal.title}</h4>
      <div>
        <img src={animal.img} alt="Фото питомца" />
      </div>
      <div>
        <p>{animal.type} </p>
        <p>породы: {animal.breed}</p>
        <p>Кличка:{animal.name} </p>
        <p>Возвраст: {animal.age}</p>
        <p>Описание:{animal.description} </p>
      </div>
      <div>
        <h5>Информация о владельце</h5>
        <p>Находиться в городе:{animal.city}</p>
        <p>Имя: {animal.User.name} </p>
        <p>Телефон: {animal.User.phone}</p>
        <p>Дата размещения: {animal.updatedAt}</p>
      </div>



    </div>
  );
}

export default BulletinBoardCard;
