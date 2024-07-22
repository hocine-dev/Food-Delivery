import "./Menu.css";
import { menu_list } from "../../assets/assets";

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <h1>Explore Our Menu</h1>
      <p className="menu-text">
        Discover a variety of delicious meals and treats that will satisfy your
        taste buds. From appetizers to desserts, we have something for everyone.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="menu-item" key={index}>
              <img src={item.menu_image} alt="menu image" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
