import IconCart from '../../images/icon-cart.svg';
import { usePageContext } from '../utils/PageContext';

export default function HeroSection() {
  const { confirmOrder, incrementQuantity, decrementQuantity, carts } =
    usePageContext();

  return (
    <>
      <section className="hero-section">
        <p className="hero-section-text">Sneaker Company</p>
        <p className="hero-section-title">Fall Limited Edition Sneakers</p>
        <div className="hero-section-description">
          <p className="hero-section-description-text">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="hero-section-price-content">
            <div className="hero-section-price">
              <p className="price">$125.00</p>
              <div className="price-discount">50%</div>
            </div>
            <p className="previous-price">$250.00</p>
          </div>
        </div>
        <div className="hero-button-group">
          <div className="hero-button-group-quantity">
            <button
              className="conditional-btn"
              id="decrement-btn"
              onClick={decrementQuantity}
            >
              -
            </button>
            <p className="hero-quantity">{carts.quantity}</p>
            <button
              className="conditional-btn"
              id="increment-btn"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <button className="add-to-cart" onClick={confirmOrder}>
            <img
              className="add-to-cart-image"
              src={IconCart}
              alt="Icon of a cart"
            />
            <p className="add-to-cart-text">Add to cart</p>
          </button>
        </div>
      </section>
    </>
  );
}
