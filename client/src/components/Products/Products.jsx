import Product from "./Product/Product";
import "./Products.scss";
const Products = ({innerHeading,headindText}) => {
    return <div className="productContainer">
        {innerHeading?<div className="heading">{headindText}</div>:""}
        <div className="products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

        </div>
        
        </div>;
};

export default Products;
