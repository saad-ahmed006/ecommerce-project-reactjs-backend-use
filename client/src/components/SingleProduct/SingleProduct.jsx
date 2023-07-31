import { useEffect, useState } from 'react';
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
import { useLocation, useParams } from 'react-router-dom';
import { AddToCart, getSingleProductSuccess } from '../../store/HomeSlice';
import { fetchDataFromApi } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const SingleProduct = () => {
    const [quantity, setquantity] = useState(1)
    const [loading, setloading] = useState(true)
    const location = useLocation();
    const { id } = useParams()
    const dispatch = useDispatch()
    const { singleproduct } = useSelector((state) => state.home.singleproduct)
    // console.log(singleproduct);
    useEffect(() => {
        fetchSingleProdData()
     
    }, [id])
  

    const fetchSingleProdData = async () => {
        try {
            const res = await fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`)
            dispatch(getSingleProductSuccess({ singleproduct: res.data }))
            setloading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const increment = () => {
        setquantity((quantity) => quantity + 1)
    }
    const decrement = () => {
        if (quantity > 1) {
            setquantity((quantity) => quantity - 1)
        }
    }
   

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>

            <div className="single-product-main-content">
                {loading ? <Loader /> :
                    <>

                        {singleproduct?.map((item) => {
                            const product = item?.attributes;
                            const payload = {
                                item: item,
                                quantity: quantity,
                              };
                            const newPayload = { ...payload };

                            return <div className="layout" key={item.id}>
                                <div className="single-product-page">
                                    <div className="leftSide">
                                        <img src={'http://localhost:1337' +
                                            product.img?.data?.[0]?.attributes.url} alt='singleproductimag' />
                                    </div>


                                    <div className="right">
                                        <span className="name">{product.title}</span>
                                        <span className="price">&#8377;{product.price}</span>
                                        <span className="desc">{product.desc}</span>

                                        <div className="cart-buttons">
                                            <div className="quantity-buttons">
                                                <span onClick={decrement}>-</span>
                                                <span>{quantity}</span>
                                                <span onClick={increment}>+</span>
                                            </div>
                                            <button
                                                className="add-to-cart-button" onClick={() => {dispatch(AddToCart(newPayload))
                                                setquantity(1)
                                                }} >
                                                <FaCartPlus size={20} />
                                                ADD TO CART
                                            </button>
                                        </div>

                                        <span className="divider" />
                                        <div className="info-item">
                                            <span className="text-bold">
                                                Category:{" "}
                                                <span>{product.categories.data[0].attributes.title}</span>
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

                        })}
                    </>

                }
                <RelatedProducts productId={id}
                    categoryId={singleproduct?.[0].attributes?.categories?.data[0].id} />

            </div>
        </>
    );
};

export default SingleProduct;