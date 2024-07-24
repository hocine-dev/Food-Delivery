import { createContext, useState ,useEffect} from "react";
import { food_list } from "../assets/assets"


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  

  const [CartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
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


 useEffect(() => {
  console.log(CartItems)
 }, [CartItems])
 

  const contextValue = {
    CartItems,
    addToCart,
    removeFromCart,
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
