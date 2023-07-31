import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { handleRemoveFromCart } from '../../../store/HomeSlice'
import { useSelector, useDispatch } from "react-redux";
const CartItem = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.home.cart)
    console.log(cart);


    return (
        <div className="cart-products">

            {cart?.map(({ item }) => (

                <div
                    className="search-result-item"
                    key={item?.id
                    }
                >
                    <div className="image-container">
                        <img
                            src={'http://localhost:1337' + item?.attributes?.img?.data[0]?.attributes?.url}
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item?.attributes?.title}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => dispatch(handleRemoveFromCart(item.id))}
                        />
                        <div className="quantity-buttons">
                            <span

                            >
                                -
                            </span>
                            <span>{item?.attributes?.quantity}</span>
                            <span

                            >
                                +
                            </span>
                        </div>
                        <div className="text">

                            <span>{item?.attributes?.quantity}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>PKR : </span>
                                {item?.attributes?.price * item?.attributes?.quantity}
                            </span>
                        </div>
                    </div>
                </div>

                ))}
            </div>
    );
};

export default CartItem;