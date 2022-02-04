import './SearchPanel.scss';

export default function SearchPanel() {
  return (
    <>
      <div className='search-panel'>
        <div className='search-container'>
          <div className='logo'>
            <h1>Fenya Store</h1>
            <p>Интернет зоомагазин</p>
          </div>
          <input className='search-input' type='text' placeholder='Поиск' />
          <button>Корзина</button>
        </div>
      </div>
    </>
  );
}
