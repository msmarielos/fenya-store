import './OrderUserCard.scss';

function OrederUserCard({ item, number }) {
  return (
    <div className="user-order-card">
      <p>Заказ номер: {number}</p>
      <ul>
        {item.OrderItems.map(el => (
          <li>
            <img
              src={
                el.Item.img.split('/')[0] === 'https:'
                  ? el.Item.img
                  : `storage/${el.Item.img}`
              }
              alt="картика"
            />
            <p>Товар: {el.Item.title}</p>
            <p>Количество: {el.count}</p>
          </li>
        ))}
      </ul>
      <p>
        Общая сумма:{' '}
        <strong>
          {item.OrderItems.reduce(
            (acc, num) => acc + num.Item.price * num.count,
            0
          )}{' '}
          ₽
        </strong>
      </p>
    </div>
  );
}

export default OrederUserCard;
