
const ItemDetail = ({item, quantity, removeQuantity, addQuantity, addItem}) => {

  
  if (!item) {
    return null;
  }

  const itemImg = item.img
  
  return (
    console.log(item),
    <div className="card">
      <h1>Detalle</h1>
      <img style={{width: "280px", height: "280px"}} src={`../src/assets/Img/${itemImg}`} alt={item.name} />
      <h3> {item.name} </h3>
      <p> ${item.price} </p>
      <p> {item.categoryId}</p>
      <h2> {quantity}</h2>
      <button className="btn btn-secondary" onClick={removeQuantity}> - </button>
      <button className="btn btn-secondary" onClick={addQuantity}> + </button>
      {<button className="btn btn-primary" onClick={() => { addItem(item, quantity)}}> Agregar al carrito</button>}
    </div>
  );
 

};

export default ItemDetail
