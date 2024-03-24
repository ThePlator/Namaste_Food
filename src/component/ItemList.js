import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from '../utils/Contants';
import { addItem, updateItemQuantity } from '../utils/cartSlice';
import { useEffect, useState } from 'react';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [totalCost, setTotalCost] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    calculateTotalCost();
    calculateTotalQuantity();
  }, [cartItems]);

  const handleAddItem = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItem) {
      dispatch(
        updateItemQuantity({
          itemId: existingItem.card.info.id,
          quantity: existingItem.quantity + 1,
        }),
        addItem(item)
      );
    } else {
      dispatch(addItem(item));
    }
  };

  const calculateTotalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total +=
        ((item.card.info.price || item.card.info.defaultPrice) / 100) *
        item.quantity;
    });
    setTotalCost(total);
  };

  const calculateTotalQuantity = () => {
    let quantity = 0;
    cartItems.forEach((item) => {
      quantity += item.quantity;
    });
    setTotalQuantity(quantity);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <div className="font-bold">{item.card.info.name}</div>
              <div
                className="flex flex-wraper"
                style={{ justifyContent: 'space-between' }}>
                ₹. {(item.card.info.price || item.card.info.defaultPrice) / 100}
                <span className="text-sm text-gray-500 ml-2">
                  Quantity:-
                  {cartItems.find(
                    (cartItem) => cartItem.card.info.id === item.card.info.id
                  )?.quantity || 0}
                </span>
              </div>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-1 rounded-lg bg-black text-white shadow-lg hover:bg-yellow-200 hover:text-black"
                onClick={() => handleAddItem(item)}>
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-20 h-20 my-3"
            />
          </div>
        </div>
      ))}
      <div className="text-right font-bold mt-2">
        Total Quantity in Cart: {totalQuantity}
      </div>
      <div className="text-right font-bold mt-4">
        Total Cost: ₹{totalCost.toFixed(2)}
      </div>
    </div>
  );
};

export default ItemList;
