import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="bannerSection">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Convallis interium pures adipiscring dis parturient posuere as a quan a eleitend nontes parturient posuere curse terror</p>
                <div className="ctas">
                <div className="banner-ctas">Read More</div>
                <div className="banner-ctas v2">Shop Now</div>

                </div>
            </div>
            <img src={BannerImg} className="Image" alt="bannar"></img>
        </div>
    </div>;
};

export default Banner;
