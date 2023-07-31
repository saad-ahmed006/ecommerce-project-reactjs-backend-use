import "./Category.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../Loader/Loader";
const Category = ({ categories,loading }) => {
    const navigate = useNavigate()
    return (
        <>
      
        <div className="shop-by-category"   >
            {
                loading?<Loader/>:
            <div className="categories">
                {categories?.map((item) => (
                    <div className="category" key={item.id} onClick={() => navigate(`/category/${item.id} `)}>
                        <img
                            src={
                                'http://localhost:1337' +
                                item.attributes.img.data.attributes.url
                            }
                            />
                    </div>
                ))}
            </div>
            }
        </div>

</>
    );
};

export default Category;