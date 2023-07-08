import "./Category.scss";
import Img from '../../../assets/cat-1.jpg'
const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category" >
                    <img src={Img} />
                </div>
                <div className="category" >
                    <img src={Img} />
                </div>
                <div className="category" >
                    <img src={Img} />
                </div>
                <div className="category" >
                    <img src={Img} />
                </div>
            </div>
        </div>
    );
};

export default Category;