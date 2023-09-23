import { Link } from "react-router-dom"
import { getCartTotal, mapCartToOrderItems } from "../utils";
import { useContext } from "react";
import CartContext from "../context/CartContext";




const Cart = () => {


    const { cart} = useContext(CartContext);
  

    const total = getCartTotal(cart);
  return (
    <div>
        <div>
            <h4>Productos</h4>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          <p>Total de la compra: {total}</p>
        

        <Link to="/checkout">
          <button >Avanzar con la compra</button>
        </Link>
    </div>
  )
}

export default Cart
