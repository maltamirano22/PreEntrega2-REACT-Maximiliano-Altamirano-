import {Link} from 'react-router-dom'
function Item({product}) {
  return (
    
       <div className="cart-product">
        <img src={product.img} className='img-container'/>        
            <h2>{product.nombre}</h2>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>



    </div>
  )
}

export default Item