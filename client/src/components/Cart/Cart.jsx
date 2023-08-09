import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
import { useSelector, } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
    const navigate = useNavigate()
    const cart = useSelector((state) => state.home.cart)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    useEffect(() => {
        let subTotal = 0;
        {
            cart?.map((item) => (
                subTotal += item?.attributes?.quan * item?.attributes?.attributes?.price
            ))
        }
        setCartSubTotal(subTotal)
    },)

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
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cart.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {
                            setShowCart(false)
                        }

                        }>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}


                {!!cart.length && (
                    <>

                        <CartItem cart={cart} />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    PKR : {cartSubTotal}
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