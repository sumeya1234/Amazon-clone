import React, { useEffect, useState } from 'react'
import classes from "./productdetail.module.css";
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endpoints';
import ProductCard from '../../Components/Product/ProductCard';
const ProductDetail = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  useEffect(()=>{
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data)
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <LayOut>
      <ProductCard
        product={product}
      />
    </LayOut>
  )
}

export default ProductDetail
