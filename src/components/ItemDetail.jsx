import PorpTypes from "prop-types"
import QuantityCountContainer from "./quantityCountContainer";


const ItemDetail = ({item, isLoading}) => {
  if (isLoading) {
    return <h2>Cargando</h2>;
}
  
  if (!item) {
    return null;
  }
  
  return (
    console.log(item),
    <div className="card">
      <h1>Detalle</h1>
      <h3> {item.name} </h3>
      <p> ${item.price} </p>
      <p> {item.category}</p>
      <QuantityCountContainer/>
    </div>
  );


ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}
};

export default ItemDetail
