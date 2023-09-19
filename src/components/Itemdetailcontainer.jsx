import { getProduct } from "../services"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const Itemdetailcontainer = () => {

    const [item,setItem] = useState(null);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getProduct(id).then((response) =>{
            setItem(response)
        }).catch(() => {
            setItem(null)
        }).finally(()=>{
            setIsLoading(false)
        })
    }, [id]);

  return (
    <div>
      <h2><ItemDetail item={item} isLoading={isLoading}/></h2>
    </div>
  )
};


export default Itemdetailcontainer
