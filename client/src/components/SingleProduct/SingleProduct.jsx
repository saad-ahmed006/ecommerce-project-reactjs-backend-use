import Imag from '../../assets/earbuds-prod-1.webp'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts';

const SingleProduct = () => {
    return (
        <>
     
        
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="leftSide">
                        <img src={Imag} alt='singleproductimag' />
                    </div>


                    <div className="right">
                        <span className="name">Watches</span>
                        <span className="price">&#8377;555</span>
                        <span className="desc">Build a Full Stack E-Commerce Website with React 18,</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span >+</span>
                            </div>
                            <button
                                className="add-to-cart-button" >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>    headphone    </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <RelatedProducts />
        </>
    );
};

export default SingleProduct;