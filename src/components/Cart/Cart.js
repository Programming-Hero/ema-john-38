import React from 'react';


const Cart = (props) => {

    const cart = props.cart
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 40) {
        shipping = 0;
    }
    else if (total > 20) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    let tax = (total / 10).toFixed(2)

    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    const formatNumber = num => {
        const precsion = num.toFixed(2)
        return Number(precsion)
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Products Added: {cart.length} </h4>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Vat & Tex: {tax}</p>
            <h4>Total: {grandTotal}</h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;