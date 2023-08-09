import React, {useEffect} from 'react';
import './AboutPage.scss'
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [location]);
  return (
    // <div className="about-page">
    //   <div className="about-content">
    //     <h1>About Us</h1>
    //     <p>
    //       Welcome to our ecommerce store! We are dedicated to providing high-quality products
    //       to our customers. Our team is passionate about delivering exceptional shopping
    //       experiences and excellent customer service.
    //     </p>
    //   </div>
    // </div>
    <div className="about-page">
    <div className="about-header">
      <h1>About Us</h1>
    </div>
    <div className="about-content">
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
        At OurEcommerceStore, our journey began with a passion for quality and a commitment to exceptional service. What started as a small endeavor has evolved into a thriving ecommerce platform, offering a curated collection of products that enrich lives. We believe in the power of connecting people with the products they love, and we take pride in crafting seamless shopping experiences. Our story is built on innovation, dedication, and a genuine desire to make a positive impact on our customers' lives. Join us on this exciting journey as we continue to redefine the way you shop and discover your favorite products.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
        At OurEcommerceStore, our mission is to empower you with the finest selection of products that enhance your lifestyle. We are committed to delivering unparalleled value, quality, and convenience, ensuring that every interaction with our platform is a delightful experience. Our goal is to simplify your shopping journey, offering a diverse range of items that cater to your needs and preferences. By fostering a community of passionate shoppers, we aim to create a place where you can discover, explore, and indulge in the things that bring joy to your life. Our mission drives us to continually innovate and improve, making us your trusted destination for all things extraordinary.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Team</h2>
        <p>
        At OurEcommerceStore, our team is a diverse and dedicated group of individuals united by a shared passion for delivering excellence. From creative minds shaping captivating designs to tech enthusiasts crafting seamless user experiences, we are a dynamic ensemble working harmoniously to bring you the best. We take pride in our collective expertise, which spans from product curation to customer support, all with the goal of ensuring your satisfaction. Our team's commitment is reflected in every aspect of your journey, from the moment you explore our offerings to the after-sales support we provide. Together, we strive to exceed your expectations and create a shopping environment that's second to none.
        </p>
        {/* Team member cards */}
      </div>
   
      
      {/* More about sections */}
      <div className="enjoy-shopping">
          <p>Thank you for getting to know us. Now, let's start your shopping journey!</p>
          <Link to={'/'}><button className="shopping-button" >Enjoy Shopping</button></Link>
        </div>
    </div>
  </div>
  );
};

export default AboutPage;