import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart, removeItemlast, removeItemfirst } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleButtonClick = (action) => {
    switch (action) {
      case 'clear':
        dispatch(clearCart());
        break;
      case 'removeLast':
        dispatch(removeItemlast());
        break;
      case 'removeFirst':
        dispatch(removeItemfirst());
        break;
      default:
        break;
    }
  };

  const buttons = [
    { label: 'Clear Cart', action: 'clear' },
    { label: 'Remove Last Item', action: 'removeLast' },
    { label: 'Remove First Item', action: 'removeFirst' },
  ];

  return (
    <div className="m-4 p-4 " style={{ paddingTop: 70 }}>
      <div className=" w-6/12 m-auto">
        <h1 className=" font-bold text-xl text-center my-2">Cart</h1>

        <div className="flex justify-center flex-wrap">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="font-bold bg-green-500 text-white p-2 rounded-md   mx-6 my-4 hover:bg-yellow-200 hover:text-black"
              style={{ background: 'red' }}
              onClick={() => handleButtonClick(button.action)}>
              {button.label}
            </button>
          ))}
        </div>

        {cartItems.length === 0 && (
          <h1 className="m-6">
            Cart is empty. Please push yourself to eat something.
          </h1>
        )}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
