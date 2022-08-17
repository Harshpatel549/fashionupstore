import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import '../styles/home.css';
// import data from '../data';

function HomeScreen() {
  
  return (
    <>
            <div className="banner">
                <div className="content">
                    <div className="container">
                        <h1 style={{color:''}}>Up Your Trends</h1>
                        <p style={{color:'rgb(71, 69, 69)'}}>
                            <span className="left"><FaQuoteLeft/></span><strong className="quote">STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK.</strong><span className="right"><FaQuoteRight/></span>
                        </p>
                    </div>
                </div>
            </div>
        <div className="gallery">
        <h1 className="colorHeading">our collection</h1>
        <div className="main-gallery">
            <div className="inner-gallery">
                <img src={require('../assets/gallery1.jpg')} alt="" />
                <img src={require('../assets/gallery2.jpg')} alt="" />
            </div>
            <div className="inner-gallery">
                <img src={require('../assets/gallery3.png')} alt="" />
            </div>
            <div className="inner-gallery">
                <img src={require('../assets/gallery5.jpg')} style={{height:'440px'}} alt="" />
                <img src={require('../assets/gallery4.jpg')} style={{height:'420px'}} alt="" />
            </div>
        </div>
    </div>
        <article className="contentBody">
            <div className="blog-post">
                <div className="blog-post_img">
                    <img src={require("../assets/img.png")} alt="" />
                </div>
            <div className="blog-post_info">
                <div className="blog-post_date">
                    <span>Exclusive</span>
                    <span>Winter Collection</span>
                </div>
                <h1 className="blog-post_title">Winter Wear</h1>
                <p className="blog-post_text">Online shopping for women at Fashion up is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this winter. 
</p>
                <a href="#" className="blog-post_cta">Read more</a>
            </div>
        </div>
        </article>
        <article className="services">
            <h1 className="service">Our Services</h1>
        </article>
        <article className="contentCard">
            <div className="container">
        <div className="card">
            <div className="box">
                <div className="content">
                    <img src={require('../assets/home-about.jpg')} style={{borderRadius:'48%'}} alt="" />
                    <h2>01</h2>
                    <h3>Contact us at</h3>
                    <p>please fill the contact form for any queries. </p>
                    <a href="/contact" id='contactusform'>contact us</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="content">
                <img src={require('../assets/home-blog.jpg')} style={{width:'200px', height:'200px', borderRadius:'48%'}} alt="" />
                    <h2>02</h2>
                    <h3>Returns and Refunds</h3>
                    <p>You may return any of the items to fashion up, for any reason, for a full refund. </p>
                    <a href="/contact" id='contactusform'>contact us</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="box">
                <div className="content">
                    <img src={require('../assets/home-contact.png')} alt="" />
                    <h2>03</h2>
                    <h3>Apply as a seller</h3>
                    <p>want to sell your products fill the contact form now.</p>
                    <a href="/contact" id='contactusform'>contact us</a>
                </div>
            </div>
        </div>
    </div>
        </article>
        
        </>
  );
}
export default HomeScreen;
