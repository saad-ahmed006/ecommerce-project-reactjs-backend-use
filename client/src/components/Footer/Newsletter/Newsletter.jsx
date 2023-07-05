import React from "react";
import "./Newsletter.scss";
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
const Newsletter = () => {
    return (
    <div className="newsLetterContainer">

        <div className="newsLetterContent">
            <p>NewsLetter</p>
            <h1>Sign Up For Lasted Updates and Offers</h1>
            <div className="inputContainer">
                <input type="email"></input>
                <button className="btn">Subscribe</button>
            </div>
            <span>Will be used accordance with our privicy policy</span>
            <div className="mediaIcons">
                <span><AiFillLinkedin /></span>
                <span><AiFillFacebook /></span>
                <span><AiFillTwitterSquare /></span>
                <span><AiFillInstagram /></span>
            </div>
        </div>
    </div>
    )
}

export default Newsletter;
