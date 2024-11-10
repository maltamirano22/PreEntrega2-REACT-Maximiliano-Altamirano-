
import Item from "./Item"

function ItemList({products}) {
  return (
    <section className="item-container">
        {products.map(product=> <Item key={product.id} product={product}/>)}
    
    </section>
  )
}

export default ItemList