import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Imag from '../../../assets/earbuds-prod-1.webp'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Search.scss";
import { fetchDataFromApi } from "../../../utils/api";
import { getSearchProdutSuccess } from "../../../store/HomeSlice";
const Search = ({ setShowSearch }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { searchproduct } = useSelector((state) => state.home.searchproduct)
    const [showItem, setShowItem] = useState(true)
    const [query, setQuery] = useState("")
    const onChange = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value)
    }
    useEffect(() => {
        if (!query.length) {
            dispatch(getSearchProdutSuccess({ searchproduct: null }));
            return;
        }

        fetchSearchData();
    }, [query]);


    const fetchSearchData = async () => {
        try {
            const res = await fetchDataFromApi(`/api/products?populate=*&filters[title][$contains]=${query}`)
            dispatch(getSearchProdutSuccess({ searchproduct: res.data }))
        }
        catch (error) {
            console.log(error);
        }

    }
    //     if (!query.length) {
    //        dispatch(getSearchProdutSuccess({searchproduct:null}));
    // return;
    //     }
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}

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

                    {searchproduct?.map((item) => (
                        <div
                            className="search-result-item"
                            onClick={() =>
                            {navigate(`/product/${item.id}`)
                            setShowSearch(false)}
                        }
                        >
                            <div className="image-container">
                                <img src={'http://localhost:1337' +
                                    item?.attributes?.img?.data?.[0]?.attributes.url} alt='searhproductimag' />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item?.attributes?.title}
                                </span>
                                <span className="desc">
                                    {item?.attributes?.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Search;
