import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import "./Category.scss";
import { getCategoriesIdDataSuccess } from "../../store/HomeSlice";
const Category = () => {
    const location=useLocation()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [loading, setloading] = useState(true)

    const { category } = useSelector((state) => state.home.category)

    useEffect(() => {
        fetchcategoryData()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    const fetchcategoryData = async () => {
        try {
            const res = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${id}`)
            dispatch(getCategoriesIdDataSuccess({ category: res.data }))
            setloading(false)
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="categoryContainer">
                <div className="category-heading">{category?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
                <Products products={category} loading={loading}/>
            </div>

        </>
    )
}

export default Category;
