/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/about.css'


const AboutPage = () => {
  return (
    <>
      <div className="About-section">
		    <div className="About-container">
		      <div className="About-title">
			      <h1 style={{color:'#4facfe'}}>About Us</h1>
		      </div>
		      <div className="About-content">
			      <div className="About-article">
				      <h3 style={{color:'#777', fontWeight:'bold'}}>Fashion Up A Place Where you can shop as per your need</h3>
					    <p style={{fontSize:'22px'}}>Fashion up is a Online Clothing Store that aims to provide good quality branded products.
						  The Company Started in 2018 as e-commerce service. Fashion up caters to the fashion needs of people.</p>
			        <p style={{fontSize:'22px'}}>Following strong client feedback and solid sales, fashion up expanded in 2021. Starting in July 2021, the business established a platform where merchants from various backgrounds can sell their own goods and earn money. This benefits the corporation as well as enabling start-ups to flourish and generate revenue.</p>
					    <div className="About-button">
			          {/* <a href="#" style={{color:'#000', backgroundColor:'#eaec4b'}}>Read More</a> */}
		          </div>
            </div>
		      </div>
        </div>
        <div className="About-image-section">
	        <img src={require("../assets/about1.jpg")} alt="" />
	      </div>
	    </div>
      <div className="gridtwo">
                <div className="rowtwo">
                    <img src={require("../assets/about2.jpg")} alt="" style={{width:'100%'}}/>
                </div>
                <div className="rowtwo">
                    <h1 style={{color:'#777', fontWeight:'bold'}}>WE PROVIDE THE NEWEST LATEST TRENDS IN FASHION</h1>
                    <p style={{color:'#777', fontSize:'22px'}}>
                        With a new year just on the way, we are all set to present an exclusive assortment of beautiful and cute trends to wear in 2022. Our team of fashion experts constantly keep an eye on the runways and present all those fashion trends that are catching everyone's attention, just for you. Hence, at Fashionup, you will find nothing passé, but only the latest fashion trends. 2022 clothing trends include mid-length skirts, feminine pink hue, luxe velvet fabric, trendy athleisure, hot off-the-shoulder tops, attractive statement sleeves, cool stripes and embroidered patches.

                    </p>
                    <a href='/product' className="button" style={{color:'#000', backgroundColor:'rgba(254, 177, 57,0.7)'}}>Explore Products</a>
                </div>
            </div>
    </>
  )
}

export default AboutPage
