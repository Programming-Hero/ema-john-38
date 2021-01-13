import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import './Review.css';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import thank from '../../images/giphy.gif';



const Review = () => {

    const [cart, setCart] = useState([])

    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () => {
        // console.log("Order Place!!!");
        setCart([])
        setOrderPlaced(true)
        processOrder()
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(product => product.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }


    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product
        })
        setCart(cartProducts)
    }, [])
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={thank} alt="" />
    }

    return (
        <div className="shop">
            <div className="product-component">
                {
                    cart.map(reviewProduct => <ReviewItems
                        removeProduct={removeProduct}
                        key={reviewProduct.key}
                        reviewProduct={reviewProduct} ></ReviewItems>)
                }
                {thankyou}

            </div>
            <div className="cart-component">
                <Cart cart={cart}></Cart>
                <button onClick={handlePlaceOrder} className="mainBtn" >Place Order</button>
            </div>
        </div>
    );
};

export default Review;