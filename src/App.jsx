import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Itemdetailcontainer from "./components/Itemdetailcontainer"
import CartProvider from "./context/CartPrivider"
import Checkout from "./components/Checkout"
import Cart from "./components/Cart"


function App() {
  return (
    <CartProvider className="container">

    <NavBar/>
  
  
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<Itemdetailcontainer/>}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>

    </CartProvider>
  )
}

export default App
