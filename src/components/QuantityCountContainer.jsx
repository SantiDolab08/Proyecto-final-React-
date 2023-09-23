import { useState } from "react";



const QuantityCountContainer = () => {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => setQuantity(quantity + 1);
    
    const removeQuantity = () => {
        if (quantity !== 1) {
        setQuantity(quantity - 1);
        }
    };
  return (
    <div>
    <h2> {quantity}</h2>
    <button onClick={removeQuantity}> - </button>
    <button onClick={addQuantity}> + </button>
  </div>
);
};
  

   

export default QuantityCountContainer
