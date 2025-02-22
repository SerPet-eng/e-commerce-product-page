import { usePageContext } from '../utils/PageContext';
import ConfirmCart from '../carts/ConfirmCart';
import EmptyCart from '../carts/EmptyCart';

export default function CartFloat() {
  const { carts } = usePageContext();

  return (
    <>
      <div className="cart-float">
        <p className="cart-float-title">Cart</p>
        <hr />
        {carts.haveCarts ? <ConfirmCart /> : <EmptyCart />}
      </div>
    </>
  );
}
