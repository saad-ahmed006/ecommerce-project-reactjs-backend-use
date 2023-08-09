import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
    const navigate=useNavigate()
    return (

        <div className="product" key={id} onClick={()=>navigate(`/product/${id}`)}>
            <div className="ImageContainer">
                <img src={
                    'http://localhost:1337' +
                    data.img.data[0].attributes.url
                } className="productimage" alt="" />
            </div>
            <p>{data.title}</p>
            <h3>PKR : {data.price}</h3>
        </div>
    )
}

export default Product;
