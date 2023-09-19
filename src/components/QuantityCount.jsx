
const QuantityCount = ({ quantity, addQuantity ,removeQuantity }) => {
    return (
      <div>
        <h2> {quantity}</h2>
        <button onClick={removeQuantity}> - </button>
        <button onClick={addQuantity}> + </button>
      </div>
    );
  };
export default QuantityCount
