import { useEffect, useState } from "react"
import {getProduct} from '../asyncMock'
import ItemList from "./ItemList"
function ItemListContainer({greetings}) {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProduct().then(data=>setProducts(data))
    },[])
        return (
        <>
        <h2>{greetings}</h2>
        <ItemList products={products}/>
        </>
    )

}
export default ItemListContainer