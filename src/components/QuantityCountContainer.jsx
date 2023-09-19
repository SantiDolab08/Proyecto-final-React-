import { useState } from "react";
import QuantityCount from "./quantityCount";


const QuantityCountContainer = () => {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => setQuantity(quantity + 1);
    
    const removeQuantity = () => {
        if (quantity !== 1) {
        setQuantity(quantity - 1);
        }
    };
  return (
  <QuantityCount
    quantity = { quantity }
    addQuantity = { addQuantity }
    removeQuantity = { removeQuantity }
  />

  )
}
   

export default QuantityCountContainer
