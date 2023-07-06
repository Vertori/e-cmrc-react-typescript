import React, { createContext, useState, useEffect } from "react";
import { ProductsType } from "../types";
import { CartContextType } from "../types";

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  itemAmount: 0,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // cart state
  const [cart, setCart] = useState<ProductsType[]>([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState<number>(0);

  // updating item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        if (currentItem.amount) {
          return accumulator + currentItem.amount;
        }
        return accumulator;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

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

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id: number) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (!cartItem) {
      return;
    }
    addToCart(cartItem, id);
  };

  // decreaseAmount
  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount ? cartItem.amount - 1 : undefined,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem && cartItem.amount && cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
