import HamburgerIcon from '../../images/icon-menu.svg';
import Logo from '../../images/logo.svg';
import IconClose from '../../images/icon-close.svg';
import IconCart from '../../images/icon-cart.svg';
import ProfilePicture from '../../images/image-avatar.png';
import CartFloat from '../carts/CartFloat';
import { usePageContext } from '../utils/PageContext';

export default function MobileNav() {
  const {
    isHandleSideBarClicked,
    handleSideBar,
    isCartClicked,
    handleCartDisplay,
    carts,
  } = usePageContext();

  return (
    <>
      <nav className="mobile-nav">
        <div className="mobile-menu-section">
          <button className="mobile-menu-btn">
            <img
              className="menu-section-image"
              src={HamburgerIcon}
              alt="A Hamburger Icon"
              onClick={handleSideBar}
            />
          </button>
        </div>
        <img className="nav-logo" src={Logo} alt="Sneakers Logo" />
        <aside
          className={`mobile-nav-side-bar ${
            isHandleSideBarClicked ? 'open' : 'close'
          }`}
        >
          <img
            className="mobile-nav-side-bar-btn"
            src={IconClose}
            alt="Icon for close button"
            onClick={handleSideBar}
          />
          <ul className="mobile-side-bar">
            <li className="mobile-bar-items">Collection</li>
            <li className="mobile-bar-items">Men</li>
            <li className="mobile-bar-items">Women</li>
            <li className="mobile-bar-items">About</li>
            <li className="mobile-bar-items">Contact</li>
          </ul>
        </aside>

        <div className="mobile-cart-section">
          <button className="mobile-cart-btn" onClick={handleCartDisplay}>
            <img
              className="mobile-cart-btn-image"
              src={IconCart}
              alt="Icon for a cart"
            />
          </button>
          {carts.quantity === 0 ? (
            ''
          ) : (
            <div className="mobile-cart-quantity">
              <small>{carts.quantity}</small>
            </div>
          )}

          <div className="mobile-profile">
            <img
              className="mobile-profile-image"
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
