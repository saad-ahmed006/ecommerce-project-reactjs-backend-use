import React, { useEffect, useState } from "react";
import "./Header.scss";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../Cart/Cart'
const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const handleScroll = () => {
        const offSet = window.scrollY
        if (offSet > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`headerContainer ${scrolled ? 'stiky-Header' : ''}`}>
                <div className='left'>
                    <p className="link">Home</p>
                    <p className="link">About</p>
                    <p className="link" >Categories</p>

                </div>
                <div className='middle'>
                    <h1 className="logo">MS-STORE.</h1>
                </div>
                <div className='right'>

                    <span><AiOutlineSearch /> </span>
                    <span><AiOutlineHeart /></span>
                    <div className="cart-badge" onClick={()=>setShowCart(true)}>
                        <span><AiOutlineShoppingCart /></span>
                        <div className="cart-count">5</div>
                    </div>

                </div>
            </div>
            {showCart ? <Cart /> : ''}
        </>

    )
};

export default Header;
