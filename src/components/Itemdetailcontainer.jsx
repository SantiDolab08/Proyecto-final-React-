import { getProduct } from "../services"
import ItemDetail from "./ItemDetail"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";


const Itemdetailcontainer = () => {

    const [item,setItem] = useState(null);
    const {id} = useParams();

    const {addItem} = useContext(CartContext);

    useEffect(()=> {
        getProduct(id).then((response) =>{
            setItem(response)
        }).catch(() => {
            setItem(null)
        })
    }, [id]);


  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => setQuantity(quantity + 1);
  
  const removeQuantity = () => {
      if (quantity !== 1) {
      setQuantity(quantity - 1);
      }
  };


  return (
    <div>
      <h2><ItemDetail item={item} addItem={addItem} quantity={quantity}
      addQuantity={addQuantity} removeQuantity={removeQuantity} 
      /></h2>
    </div>
  )
};


export default Itemdetailcontainer
