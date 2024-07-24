import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
