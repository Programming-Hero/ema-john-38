import React from 'react';

const ReviewItems = (props) => {
    // console.log(props);

    const { name, img, seller, quantity, price, key } = props.reviewProduct;


    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <br />
                <p><small>by: {seller}</small></p>
                <p>Price: <strong>{price}</strong> </p>
                <p><small>Quantity: {quantity}</small></p>
                <button
                    onClick={() => props.removeProduct(key)}
                    className="mainBtn">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;