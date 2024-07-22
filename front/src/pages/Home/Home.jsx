import Food from "../../components/Food/Food"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import "./Home.css"
import { useState } from "react"
const Home = () => {

  const [Category, setCategory] = useState("all")
  return (
    <div>
      <Header/>
      <Menu Category ={Category} setCategory={setCategory}/>
      <Food Category ={Category} />
    </div>
  )
}

export default Home