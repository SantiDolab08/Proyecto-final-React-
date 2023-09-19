const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn btn-primary position-relative">
                <i className="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    5
                    <span className="visually-hidden">cantidad de productos</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget