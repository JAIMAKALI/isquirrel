import React,{Component} from "react";
import Feature from "./feature";
import { Grid, Image,Divider } from 'semantic-ui-react'

var Home  = ()=>{
    return(
        <div className="container">
            <div className="row mt-5">
                <p className="welcome">Welcome to <span className="isquirrrel">iSquirrrel</span></p>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <p className="We-aim-to-provide-yo">We aim to provide your established business or brewing idea with a tailored key into the digital world. We focus on our three prime pillars of design, communication & strategy to give your brand the right personality and market position. </p>
                    <p className="We-aim-to-provide-yo mt-5 blockquote-footer">Call us +91-654-656</p>
                    <button className="btn idea">Submit your idea</button>
                </div>
            </div>

            <div className="row mt-5">
                <p className="text-center what-we-do">What we do</p>
                <div className="col-md-8  offset-md-2">
                    <p className="Services-which-take">
                        Services which take to a successful Digital Business
                    </p>
                </div>
            </div>

            <Feature />


            <Feature/>

            <div className="row mt-5">
                <p className="text-center what-we-do">Testimonials</p>
                <div className="col-md-8  offset-md-2">
                    <p className="Services-which-take">
                        What are clients have to say
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="row mt-5">
                        <img src="/images/group-6.png" />
                    </div>
                    <div className="row mt-3">
                        <p className="We-aim-to-provide-yo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card testinomial-card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="/images/group-2.png" />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="testno-name">John</p>
                                        <p className="We-aim-to-provide-yo">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="/images/group-2.png" />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="testno-name">John</p>
                                        <p className="We-aim-to-provide-yo">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="/images/group-2.png" />
                                    </div>
                                    <div className="col-md-10">
                                        <p className="testno-name">John</p>
                                        <p className="We-aim-to-provide-yo">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;