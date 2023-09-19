import CartWidget from "./CartWidget";
import {Link, NavLink} from 'react-router-dom';


const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid"> 
            <NavLink to="/" className="navbar-brand">SAVRA</NavLink> 

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/category/tejido">TEJIDO</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/category/3d">3D</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/category/ceramica">CERAMICA</NavLink>
                </li>
            </ul>

            
            <CartWidget />

           </div> 
        </nav>
    )
}

export default NavBar;