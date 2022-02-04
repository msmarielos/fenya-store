import './CarouselBlock.scss';

export default function CarouselBlock() {
  return (
    <>
      <div className='carousel'>
        <div className='container-carousel'>
          <div
            id='carouselExampleIndicators'
            class='carousel slide'
            data-bs-ride='carousel'>
            <div class='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='0'
                class='active'
                aria-current='true'
                aria-label='Slide 1'></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'
                aria-label='Slide 2'></button>
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'
                aria-label='Slide 3'></button>
            </div>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img
                  src='https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/67/4c/ef/567502_756x359.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item'>
                <img
                  src='https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/a6/99/f4/567498_756x359.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item'>
                <img
                  src='https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/51/04/f4/567500_756x359.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='prev'>
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide='next'>
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
