import React,{Component} from "react";
import Feature from "./feature";



var Home  = (props)=>{
    console.log(props)
    var data = [{"key":"Android Development","img_url":"/images/android.png","slug":"/android-development"},{"key":" ios Development","img_url":"/images/combined-shape-copy.png","slug":"/ios-development"},
            {"key":"Website Development","img_url":"/images/programming.png","slug":"/web-development"},{"key":" App Development","img_url":"/images/smartphone-copy.png","slug":"app-development"}                
    ]
    var data2 = [{"key":"Website Designing","img_url":"/images/group-8.png","slug":"/web-designing"},{"key":" Logo Designing","img_url":"/images/green-lantern.png","slug":"/logo-designing"},
            {"key":"Digital  Marketing","img_url":"/images/digital-marketing.png","slug":"/digital-marketing"},{"key":" SEO and SMO","img_url":"/images/analysis.png","slug":"/seo-and-smo"}                
    ]
    return(
        <div className="container">
            <div className="row mt-5">
                <p className="welcome">Welcome to <span className="isquirrrel">Digisaral</span></p>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <p className="We-aim-to-provide-you">We aim to provide your established business or brewing idea with a tailored key into the digital world. We focus on our three prime pillars of design, communication & strategy to give your brand the right personality and market position. </p>
                    <p className="We-aim-to-provide-you  mt-5 blockquote-footer">Call us +91-654-656</p>
                    <button className="btn idea">Submit your idea</button>
                </div>
            </div>

            <div className="row margin-row">
                <p className="text-center what-we-do">What we do</p>
                <div className="col-md-8  offset-md-2">
                    <p className="Services-which-take">
                        Services which take to a successful Digital Business
                    </p>
                </div>
            </div>

            <Feature value={data} {...props}/>


            <Feature value={data2} {...props}/>

            <div className="row  margin-row">
                <p className="text-center what-we-do">Testimonials</p>
                <div className="col-md-8  offset-md-2">
                    <p className="Services-which-take">
                        What are clients have to say
                    </p>
                </div>
            </div>

            <div className="row margin-row">
                <div className="col-md-6">
                    <div className="row mt-5">
                        <img src="/images/group-6.png" />
                    </div>
                    <div className="row mt-3">
                        <p className="We-aim-to-provide-you">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
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
                                        <p className="We-aim-to-provide-you">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
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
                                        <p className="We-aim-to-provide-you">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
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
                                        <p className="We-aim-to-provide-you">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
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
                                        <p className="We-aim-to-provide-you">Lorem Ipsum is the dummy text of printing and type setting industry.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className="row mt-5">
                <div className="col-md-8  offset-md-2">
                    <p className="Services-which-take">
                        Lets get in touch
                    </p>

                    <button className="btn idea btn-margin">Submit a Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Home;