import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav'>
            <Link to="/"> <img id="logo" src="./src/assets/logo.PNG" id="logo" /></Link>
            <div>
            <Link to="/">Home</Link>
            <Link to="/products">Productos</Link>
            <Link to="/cart" id="cart"><img id='cart' src="./src/assets/carrito.png" /><span id="cuenta-carrito">0</span></Link>
            </div>
        </nav>
        
    )

}
export default NavBar