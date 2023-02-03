import React from 'react';
import { addToDb } from '../Utilities/fakeDB';
import './Product.css';

const Product = (props) => {
    const {id,name,price}=props.sendingProductData;
    const addToClick = (id) =>{
        // console.log('Product Added',id)
        addToDb(id)
    }
    return (
        <div className="product-style">
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <h4>Price: ${price} USD</h4>
            <button style={{padding:'3px 7px'}} onClick={()=>addToClick(id)}>Add To Click</button>
        </div>
    );
};

export default Product;