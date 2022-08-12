/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">bags</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fa fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fa fab fa-twitter"></i></a>
                            <a href="#"><i className="fa fab fa-instagram"></i></a>
                            <a href="#"><i className="fa fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <p style={{color:'#fff'}}>&copy; 2022 Fashion Up, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
