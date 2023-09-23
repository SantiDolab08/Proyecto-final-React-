import { useContext } from "react"
import CartContext from "../context/CartContext"
import { getCartQuantity } from "../utils"
import { Link } from "react-router-dom"


const CartWidget = () => {
const { cart } = useContext(CartContext);

const quantity = getCartQuantity(cart);

    return(
        <Link to="/cart">    
            <div>
                <button type="button" className="btn btn-primary position-relative">
                    <i className="bi bi-cart4"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {quantity > 0 ? quantity : ""}
                        <span className="visually-hidden">cantidad de productos</span>
                    </span>
                </button>
            </div>
        </Link>
    )
}

export default CartWidget