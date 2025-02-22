import IconDelete from '../../images/icon-delete.svg';
import SampleThumbnail from '../../images/image-product-1-thumbnail.jpg';
import { usePageContext } from '../utils/PageContext';

export default function ConfirmCart() {
  const { carts, deleteButton } = usePageContext();

  return (
    <>
      <div className="cart-float-container">
        <img
          className="cart-float-thumbnail"
          src={SampleThumbnail}
          alt="Sample Thumbnail"
        />

        <div className="cart-float-description">
          <p className="cart-float-type">Fall Limited Edition Sneakers</p>
          <div className="cart-float-prices">
            <p className="float-prices">$125.00</p>
            <p className="float-quantity">x{carts.quantity}</p>
            <p className="float-total">${carts.totalPrice}</p>
          </div>
        </div>
        <button className="delete-btn" onClick={deleteButton}>
          <img
            className="delete-btn-image"
            src={IconDelete}
            alt="Icon of delete button"
          />
        </button>
      </div>
      <button className="checkout-btn">
        <p className="checkout-btn-text">Checkout</p>
      </button>
    </>
  );
}
