import React,{useState} from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = ({setShowCart}) => {
 
const [show] = useState(false)
    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}

                    >
                        <MdClose className="close-btn"  />
                        <span className="text">close</span>
                    </span>
                </div>

                {show && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" >
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!show && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;666
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                  
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;