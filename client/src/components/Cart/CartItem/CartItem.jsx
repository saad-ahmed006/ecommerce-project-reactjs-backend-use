import React from "react";
import { MdClose } from "react-icons/md";
import Image from '../../../assets/earbuds-prod-1.webp'
import "./CartItem.scss";
const CartItem = () => {

    return (
        <div className="cart-products">
            <div
                className="search-result-item"

            >
                <div className="image-container">
                    <img
                        src={
                            Image
                        }
                    />
                </div>
                <div className="prod-details">
                    <span className="name">headphone</span>
                    <MdClose
                        className="close-btn"
                        
                    />
                    <div className="quantity-buttons">
                        <span
                           
                        >
                            -
                        </span>
                        <span>5</span>
                        <span
                          
                        >
                            +
                        </span>
                    </div>
                    <div className="text">
                        <span>4</span>
                        <span>x</span>
                        <span className="highlight">
                            <span>&#8377;</span>
                          555
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartItem;