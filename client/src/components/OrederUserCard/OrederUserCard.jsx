import React from 'react';

function OrederUserCard({ item }) {

  console.log(item, 'item')
  return (
    <div>
      <ul>
       {item.OrderItems.map((el) => <li><p>Товар {el.item_id}</p><p>Количество: {el.count}</p></li>)}
      </ul>

       
    </div>
  );
}

export default OrederUserCard;
