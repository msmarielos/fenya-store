import './BulletinBoardCard.scss';

function BulletinBoardCard({ animal }) {
  return (
    <div className="animal-card">
      <h4>{animal.title}</h4>

      <img src={animal.img} alt="Фото питомца" />

      <p>
        <strong>Порода</strong>: {animal.breed}
      </p>
      <p>
        <strong>Кличка</strong>: {animal.name}
      </p>
      <p>
        <strong>Возраст</strong>: {animal.age}
      </p>
      <p>
        <strong>Описание</strong> {animal.description}
      </p>

      <h4>Информация о владельце</h4>
      <p>
        <strong>Город</strong>: {animal.city}
      </p>
      <p>
        <strong>Имя</strong>: {animal.User.name}{' '}
      </p>
      <p>
        <strong>Телефон</strong>: {animal.User.phone}
      </p>
      <p>
        <strong>Дата размещения</strong>: {animal.updatedAt.slice(0, 10)}
      </p>
    </div>
  );
}

export default BulletinBoardCard;
