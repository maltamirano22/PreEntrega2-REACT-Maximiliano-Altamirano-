import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {getProductId} from '../asyncMock'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const {productId} = useParams();

    useEffect(()=>{
        const numericProductId = parseInt(productId, 10); 
        getProductId(numericProductId)
            .then((data) => {
                setProduct(data);
                
        });
    }, [productId]);
  return (
    <>
    <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer