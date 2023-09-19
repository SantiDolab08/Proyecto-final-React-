import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Itemdetailcontainer from "./components/Itemdetailcontainer"
import QuantityCountContainer from "./components/quantityCountContainer"

function App() {
  return (
    <div className="container">

    <NavBar/>

  
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<Itemdetailcontainer/>}/>
      </Routes>

    </div>
  )
}

export default App
