import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { handleCartProductQuantity, handleRemoveFromCart } from '../../../store/HomeSlice'
import { useDispatch } from "react-redux";
const CartItem = ({ cart }) => {
    const dispatch = useDispatch()
    // const cart = useSelector((state) => state.home.cart)
    // console.log(cart);

    return (
        <div className="cart-products">

            {cart?.map((item) => (

                <>

                <div
                    className="search-result-item"
                    key={item?.id}
                >
                    <div className="image-container">
                        <img
                            src={'http://localhost:1337' + item?.attributes?.attributes?.img?.data[0]?.attributes?.url}
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item?.attributes?.attributes?.title}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => dispatch(handleRemoveFromCart(item))}
                        />
                        <div className="quantity-buttons">
                            <span
                                onClick={() => dispatch(handleCartProductQuantity(["dec",item]))}

                            >
                                -
                            </span>
                            <span>{item?.attributes?.quan}</span>
                            <span
                                onClick={() => dispatch(handleCartProductQuantity(["inc",item]))}

                            >
                                +
                            </span>
                        </div>
                        <div className="text">

                            <span>{item?.attributes?.quan}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>PKR : </span>
                                {item?.attributes?.quan*item?.attributes?.attributes?.price }
                            </span>
                        </div>
                    </div>
                </div>
                </>
            ))}
        </div>
    );
};

export default CartItem;