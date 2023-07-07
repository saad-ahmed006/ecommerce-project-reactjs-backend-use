import React,{useState} from "react";
import { MdClose } from "react-icons/md";
import Imag from '../../../assets/earbuds-prod-1.webp'

import "./Search.scss";
const Search = ({ setShowSearch }) => {
    const [showItem, setShowItem] = useState(true)
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"

                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>



            <div className="search-result-content">
                {showItem && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                   
                        <div
                            className="search-result-item"
                           
                        >
                            <div className="image-container">
                                <img
                                    src={
                                        Imag  
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                   titlevfv
                                </span>
                                <span className="desc">
                                process.env
                                            .REACT_APP_STRIPE_APP_DEV_URL +
                                        item.attributes.image.data.attributes
                                            .url
                                </span>
                            </div>
                        </div>
                   
                </div>
            </div>
        </div>
    )
};

export default Search;
