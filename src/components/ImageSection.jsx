import { usePageContext } from '../utils/PageContext';
import IconPrevious from '../../images/icon-previous.svg';
import IconNext from '../../images/icon-next.svg';

export default function ImageSection() {
  const {
    items,
    image,
    currentIndex,
    handleClick,
    previousIndex,
    nextIndex,
    windowSize,
  } = usePageContext();

  const minWidth = 760;

  return (
    <>
      <section className="image-section">
        <div className="image-section-current">
          <img
            className="image-section-hero"
            src={image[currentIndex]}
            alt={image[currentIndex]}
          />

          <div className={windowSize.width <= minWidth ? 'show' : 'hide'}>
            <button className="image-section-prev-btn" onClick={previousIndex}>
              <img src={IconPrevious} alt="Icon Previous" />
            </button>
            <button className="image-section-next-btn" onClick={nextIndex}>
              <img src={IconNext} alt="Icon Next" />
            </button>
          </div>
        </div>

        <div
          className={`${
            windowSize.width < minWidth ? 'item-hide' : 'item-show'
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`image-section-item ${
                index === currentIndex ? 'active-image-outline' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <img
                className={`image ${index === currentIndex ? 'active' : ''}`}
                src={item.images.main}
                alt={item.image}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
