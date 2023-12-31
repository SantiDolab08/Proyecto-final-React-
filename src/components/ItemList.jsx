import PropTypes from "prop-types"
import { Link } from "react-router-dom"


const ItemList = ({ items }) => {

  return (
    <div>
      <h1>Productos</h1>
    
      <div className="container ">
        <ul className="row">
          {items.map((product) =>(
            <li className="col-4" key={product.id}>
                <div className="card text-center mb-3" >
                    <Link  to={`/item/${product.id}`}> 
                      <div className="card-body">
                          <img style={{width: "200px", height: "200px"}} src={`../src/assets/Img/${product.img}`} alt={product.name} />
                          <h2 className="card-title">{product.name}</h2>
                          <p className="card-text">${product.price}</p>
                          <p className="card-text"> Category:{product.categoryId} </p>
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
