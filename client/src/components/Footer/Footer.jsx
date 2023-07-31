import React from "react";
import { FaLocationArrow } from 'react-icons/fa'
import { BsFillPhoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h4>About Us</h4>
                            <ul>
                                <p>There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback .</p>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul>
                                <li><FaLocationArrow className="icon" /><a href="#">123 Street, City, Country</a></li>
                                <li><BsFillPhoneFill className="icon"/><a href="#">Phone: 032234567</a></li>
                                <li><MdEmail className="icon"/><a href="#">ms-store.@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#">HeadPhones</a></li>
                                <li><a href="#">Smart Watches</a></li>
                                <li><a href="#">Bluetooth Speakers</a></li>
                                <li><a href="#">WireLess EarBuds</a></li>
                                <li><a href="#">Home Theatre</a></li>
                                <li><a href="#">Prohectors </a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Pages</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Privicy Policy</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#"> Terms And Condition</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
