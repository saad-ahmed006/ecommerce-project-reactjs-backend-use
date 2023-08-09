import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
import { Link } from "react-router-dom";
const Banner = () => {
    return  <div className="hero-banner">
    <div className="content">
        <div className="text-content">
            <h1>SALES</h1>
            <p>
                Convallis interdum purus adipiscing dis parturient
                posuere ac a quam a eleifend montes parturient posuere
                curae tempor
            </p>
            <div className="ctas">
                <Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}><div className="banner-cta">Read More</div></Link>
                <div className="banner-cta v2">Shop Now</div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} />
    </div>
</div>
};

export default Banner;
