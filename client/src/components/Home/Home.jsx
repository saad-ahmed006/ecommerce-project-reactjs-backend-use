import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return(
    <>
    <div className="home"></div>
        <Banner />
        <Category />  
        <Products/> 
    </>
        )
};

export default Home;

