import { createContext, useState} from "react";
import { food_list } from "../assets/assets"


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  

  const [CartItems, setCartItems] = useState({});

  const FirstAddToCart = (id) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = { ...prevCartItems, [id]: 1 };
      return updatedCartItems;
    });
  };




  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      console.log(updatedCart)
      if (!updatedCart[itemId]) {
        updatedCart[itemId] = 1;
      } else {
        updatedCart[itemId] += 1;
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };


 

  const contextValue = {
    CartItems,
    addToCart,
    removeFromCart,
    FirstAddToCart,
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
