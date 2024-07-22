import "./FoodItem.css"
import assets from "../../assets/assets"

const FoodItem = ({id,name,price,desc,image}) => {
  return (
    <div className="food-item" key={id}>
        <div className="food-item-img-container">
            <img src={image} alt={name} className="food-item-img" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-desc">{desc}</p>
            <p className="food-item-price">{price}$</p>
        </div>
    </div>
  )
}

export default FoodItem