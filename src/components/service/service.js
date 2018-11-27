import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import { Divider } from "semantic-ui-react";
import Slider from "react-slick";
class Service extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className="container">
                <div className="row mt-5" style={{ marginBottom: 200 }}>
                    <p className="text-center what-we-do">Our Story</p>
                    <div className="col-md-8  offset-md-2">
                        <p className="Services-which-take">
                            Who we are?
                        </p>
                        <p className="We-aim-to-provide-yo lead">We aim to provide your established business or brewing idea with a tailored key into the digital world. We focus on our three prime pillars of design, communication & strategy to give your brand the right personality and market position. </p>
                    </div>
                </div>

                <div className="row margin-row">
                    <p className="text-center what-we-do">Our Services</p>
                    <div className="col-md-8  offset-md-2">
                        <p className="Services-which-take">
                            Product that people use, product that makes money
                        </p>
                    </div>

                    <div className="col-md-10 offset-md-1 mt-5">

                        <Slider {...settings}>
                            <div class="card slider-card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="/images/group-2.png" /></h5>
                                    <p class="card-text We-aim-to-provide-you">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                </div>
                            </div>

                            <div class="card slider-card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="/images/group-2.png" /></h5>
                                    <p class="card-text We-aim-to-provide-you">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                            <div class="card slider-card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="/images/group-2.png" /></h5>
                                    <p class="card-text We-aim-to-provide-you">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>

                            <div class="card slider-card">
                                <div class="card-body">
                                    <h5 class="card-title"><img src="/images/group-2.png" /></h5>
                                    <p class="card-text We-aim-to-provide-you">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                
                <div className="row" style={{ marginTop: 250 }}>
                    <p className="text-center what-we-do">Our Strategy</p>
                    <div className="col-md-8  offset-md-2">
                        <p className="Services-which-take">
                            Key behind  a successful Product
                        </p>
                    </div>

                    <div className="col-md-10 offset-md-1 mt-5">
                        <div className="diagram">
                            <span className="diag-text">Conceptualize</span>
                            <img src="/images/group-13.png" className="diag-img" />
                            <span className="diag-text">Branding</span>
                            <img src="/images/group-13.png" className="diag-img" />
                            <span className="diag-text">User Experience</span>
                            <img src="/images/group-13.png" className="diag-img" />
                            <span className="diag-text">User Interface</span>
                            <img src="/images/group-12-copy-2.png" className="diag-img-1" />
                            <br/>
                        </div> 
                        <div className="diagram-2">
                            <span className="diag-text">Polishing</span>
                            <img src="/images/group-13.png" className="diag-img" />
                            <span className="diag-text">Social Media Marketing</span>
                            <img src="/images/group-13.png" className="diag-img" />
                            <span className="diag-text">Development</span>
                        </div>
                    </div>
                </div>

                <div className="row margin-row">
                    <div className="col-md-8  offset-md-2">
                        <p className="Services-which-take"> Have an idea </p>
                        <button className="btn idea btn-margin">Submit a Quote</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Service;