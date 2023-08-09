import React, { useEffect, useState } from "react";
import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from '../../utils/api'
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItemSuccess } from "../../store/HomeSlice";
import { getProductItemSuccess } from "../../store/HomeSlice";
import { useLocation } from "react-router-dom";


const Home = () => {
    const [loading, setloading] = useState(true)
    const location = useLocation()
    const { categories } = useSelector((state) => state.home.categories)
    const { products } = useSelector((state) => state.home.products)
    // const { cart } = useSelector((state) => state.home.cart)
    // console.log(cart);
    const dispatch = useDispatch()
    useEffect(() => {
        fetchCategoriesData()
        fetchProductData()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const fetchCategoriesData = async () => {
        try {
            const res = await fetchDataFromApi("/api/categories?populate=*")
            dispatch(getCategoryItemSuccess({ categories: res.data }))

            setloading(false)
        }
        catch (error) {
            console.log(error);
            setloading(false)
        }
    }
    const fetchProductData = async () => {
        try {
            const res = await fetchDataFromApi("/api/products?populate=*")
            dispatch(getProductItemSuccess({ products: res.data }))
            setloading(false)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="home" ></div>
            <Banner />

            <Category categories={categories} loading={loading} />

            <Products innerHeading={true} headindText={'popular products'} products={products} loading={loading} />
        </>
    )
};

export default Home;

