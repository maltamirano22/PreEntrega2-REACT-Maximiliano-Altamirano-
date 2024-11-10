import Cart from "./Cart"


function ItemDetail({product}) {

  return (
<div className="container-cart-detail">
        <section className="detail-container">
            <h2>{product.nombre}</h2>
            <img className="img" src={product.img}/>
            <p>$ {product.precio}</p>
            <p>Unidades disponibles: {product.cantidad}</p>
            <p>{product.detalle}</p>
            <button className="btn">Comprar</button>


            
        </section>
        </div>
      );}

export default ItemDetail