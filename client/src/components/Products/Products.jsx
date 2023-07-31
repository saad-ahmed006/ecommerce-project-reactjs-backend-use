import Loader from "../Loader/Loader";
import Product from "./Product/Product";
import "./Products.scss";
const Products = ({ products, innerHeading, headindText, loading }) => {
        return <div className="productContainer">
                {innerHeading ? <div className="heading">{headindText}</div> : ""}

                <div className="products">
                        {loading ? <Loader /> :
                        <>
                        
                        {products?.map((item) => (
                                <Product key={item.id} id={item.id} data={item.attributes} />
                                ))}

</>}

                </div>


        </div>;
};

export default Products;
