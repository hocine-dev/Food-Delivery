import "./Menu.css";
import { menu_list } from "../../assets/assets";

const Menu = ({Category,setCategory}) => {
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
            <div className="menu-item" key={index} onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}}>
              <img src={item.menu_image} alt="menu image" className={Category===item.menu_name?"menu-active":""} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
