import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {

    // console.log(props);
    const { name, img, seller, stock, price, key } = props.products;

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <Link to={'/productDetails/' + key}><h3>{name}</h3></Link>
                <br />
                <p><small>by: {seller}</small></p>
                <p>Price: <strong>{price}</strong> </p>
                <p><small>Stock: {stock}</small></p>
                {props.showAddToCard && <button
                    onClick={() => props.handleAddToCart(props.products)}
                    className="mainBtn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;