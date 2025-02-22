import Logo from '../../images/logo.svg';
import IconCart from '../../images/icon-cart.svg';
import ProfilePicture from '../../images/image-avatar.png';
import CartFloat from '../carts/CartFloat';
import { usePageContext } from '../utils/PageContext';

export default function Navbar() {
  const { isCartClicked, handleCartDisplay, carts } = usePageContext();

  return (
    <>
      <nav className="desktop-nav">
        <img className="desktop-nav-logo" src={Logo} alt="Sneakers Logo" />
        <aside className="desktop-nav-side-bar">
          <ul className="desktop-side-bar">
            <li className="desktop-bar-items">Collection</li>
            <li className="desktop-bar-items">Men</li>
            <li className="desktop-bar-items">Women</li>
            <li className="desktop-bar-items">About</li>
            <li className="desktop-bar-items">Contact</li>
          </ul>
        </aside>

        <div className="desktop-cart-section">
          <button className="desktop-cart-btn" onClick={handleCartDisplay}>
            <img
              className="desktop-cart-btn-image"
              src={IconCart}
              alt="Icon for a cart"
            />
          </button>
          {carts.quantity === 0 ? (
            ''
          ) : (
            <div className="desktop-cart-quantity">
              <small>{carts.quantity}</small>
            </div>
          )}

          <div className="desktop-profile">
            <img
              className="desktop-profile-image"
              src={ProfilePicture}
              alt="A Profile Picture"
            />
          </div>
        </div>
        {isCartClicked && <CartFloat />}
      </nav>
    </>
  );
}
