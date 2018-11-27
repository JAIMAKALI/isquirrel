import React from "react";

var Footer = ()=>{
    return(
        <div className="footer-cont">
        <div className="container footer-con">
            <div className="row margin-row">
                <div className="col-md-3">
                    <p className="footer-title">Company</p>
                    <ul className="footer-list">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Mobile App Development</a>
                        </li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                        <li>
                            <a href="#">Testinomials</a>
                        </li>
                        <li>
                            <a href="#">Our Team</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Tech Stack</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <p className="footer-title">Portfolio</p>
                    <ul className="footer-list">
                        <li>
                            <a href="#">Taxi</a>
                        </li>
                        <li>
                            <a href="#">Tour and Travel</a>
                        </li>
                        <li>
                            <a href="#">Shopping</a>
                        </li>
                        <li>
                            <a href="#">Social Networking</a>
                        </li>
                        <li>
                            <a href="#">On Demand Services</a>
                        </li>
                        <li>
                            <a href="#">food Delivery</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <p>{'\u00A0'} {'\u00A0'}</p>
                    <ul className="footer-list">
                        <li>
                            <a href="#">New Magazine</a>
                        </li>
                        <li>
                            <a href="#">Media</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Real staret</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <p className="footer-title">Services</p>
                    <ul className="footer-list">
                        <li>
                            <a href="#">Application Development</a>
                        </li>
                        <li>
                            <a href="#">Media</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-2">
                    <p>{'\u00A0'} {'\u00A0'}</p>
                    <ul className="footer-list">
                        <li>
                            <a href="#">Web Designing</a>
                        </li>
                        <li>
                            <a href="#">UI/UX Designing</a>
                        </li>
                        <li>
                            <a href="#">Web Stragey</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row" style={{marginTop:55}}>
                <div className="col-md-4">
                <p className="footer-logo"><span><img src="/images/logo1.jpg" className="logo-icon"/></span>{'\u00A0'} Digisaral</p>
                </div>
                <div className="col-md-8 footer-img">
                    <ul>
                        <li>
                            <img src="/images/facebook-logo-copy.png" />
                        </li> 
                        <li>
                            <img src="/images/instagram-copy.png" />
                        </li> 
                        <li>
                            <img src="/images/twitter-logo-silhouette-copy.png" />
                        </li>    
                    </ul>
                </div>
            </div>
            <p className="footer-add" style={{marginTop:5}}>C370, 100 foot Road, Ambedkar Colony, Chhatarpur, New Delhi, 110074</p>
            <p className="footer-add">&copy; {'\u00A0'}  2018 Digisaral {'\u00A0'} www.digisaral.com</p>
        </div>
        </div>
    )
}

export default Footer;