import React, { useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {

    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey];
            return product
        })
        setCart(previousCart)
    }, [])

    const handleAddToCart = (product) => {
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === product.key)
        let count = 1;
        let newCart
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1
            newCart = [...cart, product]
        }

        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="shop">
            <div className="product-component">
                {
                    products.map(productList => <Product
                        showAddToCard={true}
                        key={productList.key}
                        handleAddToCart={handleAddToCart}
                        products={productList} >
                    </Product>)
                }
            </div>
            <div className="cart-component">
                <Cart cart={cart}></Cart>
                <Link to="/review">
                    <button className="mainBtn" >Order Review</button>
                </Link>
            </div>
        </div>
    );
};

export default Shop;