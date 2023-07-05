import React, { createContext, useState, useEffect } from "react";
import { ProductsType } from "../types";
import { CartContextType } from "../types";

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // cart state
  const [cart, setCart] = useState<ProductsType[]>([]);

  // add to cart
  const addToCart = (product: ProductsType, id: number) => {
    const newItem = { ...product, amount: 1 };
    // checking if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if it is
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id && cartItem.amount) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    // if it isn't
    else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
