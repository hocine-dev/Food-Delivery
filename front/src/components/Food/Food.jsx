import "./Food.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const Food = ({ Category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food" id="food">
      <h2>Top Dishes Near You</h2>

      <div className="food-list">
        {food_list.map((item, index) => {
          if (Category === "All" || Category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                desc={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Food;
