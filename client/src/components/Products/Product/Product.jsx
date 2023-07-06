import "./Product.scss";
import ProductImg from '../../../assets/earbuds-prod-1.webp'
const Product = () => {
    return <div className="product">
        <div className="ImageContainer">
        <img src={ProductImg}  className="productimage"alt="" />
        </div>
        <p>e with React 18, Strapi, Stripe with...</p>
        <h3> ₹ 333</h3>
    </div>;
};

export default Product;
