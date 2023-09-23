import PropTypes from "prop-types"
import { Link, NavLink } from "react-router-dom"


const ItemList = ({ items }) => {
  return (
    <div>
      <h1>Productos</h1>
    
      <div >
        <ul className="row">
          {items.map((product) =>(
            <li className="col-4" key={product.id}>
                <div className="card text-center mb-3" >
                    <Link  to={`/item/${product.id}`}>
                        {/* <img src={item.image} className="card-img-top" alt="" /> */}
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text">${product.price}</p>
                            <p className="card-text"> {product.categoryId} </p>
                        </div>
                    </Link>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ItemList
