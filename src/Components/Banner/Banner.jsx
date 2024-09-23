import React from "react";
import './Banner.css';
import arrow_icon from '../Assets/arrow.png';
import banner_img from '../Assets/hero_image.png';

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-left">
                <h2>Deepavali Specials</h2>
                <div>
                    <div className="first-line">
                        <p>New</p>
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                </div>
                <div className="banner-latest-btn">
                    <div>Latest collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="banner-right">
                <img src={banner_img} alt=''/>
            </div>
        </div>
    )
}

export default Banner;