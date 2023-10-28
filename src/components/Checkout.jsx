import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../utils";
import { createOrder } from "../services";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const { cart, clear } = useContext(CartContext);

  const total = getCartTotal(cart);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const buyer =  {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
  }


  const handleCheckout = () => {

    const order = {
      buyer,
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    console.log(order);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
    clear();
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };







  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", formData);
    handleReset();
  };


  return (
    <div>
      <h1>Checkout</h1>

      <h2>Resumen de la compra</h2>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
           <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Telefono</label>
        <input
          value={formData.phone}
          name="phone"
          id="phone"
          onChange={handleChange}
        />
      </div>

    </form>
  

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

          <button onClick={handleCheckout}>Finalizar compra</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
