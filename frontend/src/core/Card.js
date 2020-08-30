import React from 'react';
import {Link} from 'react-router-dom';
import ShowImage from './ShowImage';

const Card = ({product, showViewProductButton=true}) => {
    
    const showViewButton = (showViewProductButton) => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        View Product
                    </button>
                </Link>
            )
        )
    }
    return (
        <div className="card">
            <div className="card-header"> {product.name} </div>
            <div className="card-body"> 
                <ShowImage item={product} url="product" />
                <p> {product.description.substring(0, 50)} </p>
                <p> {product.price} tk </p>
                {showViewButton(showViewProductButton)} 
                
                <button className="btn btn-outline-warning mt-2 mb-2">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Card;

