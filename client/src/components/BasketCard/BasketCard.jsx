import React from 'react';

function BasketCard(props) {
  return (
    <div>
      <img src='https://steamuserimages-a.akamaihd.net/ugc/456362427316098080/3C28639018563A1AE744375C0B37C84C6FCCE500/' alt='картика'/>
      <button>+</button>
      <button>-</button>
      <button>Удалить</button>
      <p></p>
      <p>руб</p>
    </div>
  );
}

export default BasketCard;
