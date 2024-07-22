import { createContext, useState } from "react";
import { food_list } from "../assets/assets"


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [state, setState] = useState({
    // Initial state values
    menuItems: [],
    cart: [],
    user: null,
  });

  // Function to add item to cart
  const addToCart = (item) => {
    setState((prevState) => ({
      ...prevState,
      cart: [...prevState.cart, item],
    }));
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.filter((item) => item.id !== itemId),
    }));
  };

  // Function to update user information
  const updateUser = (userInfo) => {
    setState((prevState) => ({
      ...prevState,
      user: userInfo,
    }));
  };

  const contextValue = {
    state,
    addToCart,
    removeFromCart,
    updateUser,
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
