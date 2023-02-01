import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div >
            <h1>Product Loaded: {products.length}</h1>
            <div className="product-container">
                {
                    products.map(product=><Product sendingProductData={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;