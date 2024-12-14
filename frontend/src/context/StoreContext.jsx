import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const deliveryFee = 2; // Static delivery fee (you can adjust this if needed)

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return food_list.reduce((acc, item) => {
      if (cartItems[item._id]) {
        acc += item.price * cartItems[item._id];
      }
      return acc;
    }, 0);
  };

  // Calculate the subtotal and total
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  // Add to cart function
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove from cart function
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 0) - 1;
      if (newCount > 0) {
        return { ...prev, [itemId]: newCount };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
  };

  // Log cart items whenever they change (for debugging purposes)
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
