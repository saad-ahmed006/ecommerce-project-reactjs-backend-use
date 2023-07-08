import React, { useEffect } from "react";
import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from '../../utils/api'
const Home = () => {
    useEffect(() => {
        fetchCategoriesData()
    }, [])

    const fetchCategoriesData = () => {
        fetchDataFromApi("/api/products?populate=*").then(res => console.log(res))
        
    }
    return (
        <>
            <div className="home" ></div>
            <Banner />
            <Category />
            <Products innerHeading={true} headindText={'popular products'} />
        </>
    )
};

export default Home;

