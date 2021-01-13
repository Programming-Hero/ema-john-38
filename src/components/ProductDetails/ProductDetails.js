import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {

    const { productKey } = useParams()
    const product = fakeData.find(product => product.key == productKey)
    console.log(product);

    return (
        <div>
            <h2> {productKey} Product Details Page!!!</h2>
            <Product showAddToCard={false} products={product} ></Product>
        </div>
    );
};

export default ProductDetails;