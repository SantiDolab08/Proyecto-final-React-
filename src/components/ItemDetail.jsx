

const ItemDetail = ({item, quantity, removeQuantity, addQuantity, addItem}) => {

  
  if (!item) {
    return null;
  }
  
  return (
    console.log(item),
    <div className="card">
      <h1>Detalle</h1>
      <h3> {item.name} </h3>
      <p> ${item.price} </p>
      <p> {item.categoryId}</p>
      <h2> {quantity}</h2>
      <button onClick={removeQuantity}> - </button>
      <button onClick={addQuantity}> + </button>
      { <button onClick={() => addItem(item, quantity)}> Agregar al carrito</button> }
    </div>
  );
 

};

export default ItemDetail
