import "./FoodItem.css";
import assets from "../../assets/assets";
import { useContext} from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, desc, image }) => {
  const { CartItems, addToCart, removeFromCart,FirstAddToCart } = useContext(StoreContext);

  return (
    <div className="food-item" key={id}>
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-img" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
          {!CartItems[id] ? (
            <img
              src={assets.add_icon_white}
              alt="counter"
              className="add-item"
              onClick={() => FirstAddToCart(id)}
            />
          ) : (
            <div className="counter">
              <img
                src={assets.remove_icon_red}
                alt="remove"
                onClick={() => removeFromCart(id)}
              />
              <p>{CartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt="add"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">{price}$</p>
      </div>
    </div>
  );
};


export default FoodItem;
