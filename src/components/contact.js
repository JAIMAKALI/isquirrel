import React,{Component} from "react";
import { Divider} from 'semantic-ui-react'

var Contact = ()=>{
    return(
        <div className="container">
            <div className="row mt-5" style={{ marginBottom: 109 }}>
                <p className="text-center what-we-do">Our Story</p>
                <div className="col-md-8  offset-md-2">
                    <Divider horizontal inverted className="Services-which-take" style={{fontSize:20}}>
                        Get in touch and let us know how we can help.
                    </Divider>
                    <p className="We-aim-to-provide-yo lead">
                        We aim to provide your established business or brewing idea with a tailored key into the digital world. We focus on our three prime pillars of design, communication & strategy to give your brand the right personality and market position. 
                    </p>

                </div>
            </div>

            <div className="row mt-5" style={{ marginBottom: 109 }}>
                <p className="text-center what-we-do">Request a Quote</p>
                <div className="col-md-8  offset-md-2">
                  <div className="jumbotron">
                        <form>
                            <div class="form-group">
                                <label id="formGroupExampleInput">Name</label>
                                <input type="text" class="form-control"  placeholder="Gabriel Soares" />
                            </div>
                            <div class="form-group">
                                    <label id="formGroupExampleInput2">Email id</label>
                                    <input type="text" class="form-control" placeholder="Gabrielsoares12@gmail.com" />
                            </div>
                            <div class="form-group">
                                    <label id="formGroupExampleInput3">Country</label>
                                    <input type="text" class="form-control" placeholder="India" />
                            </div>
                            <div class="form-group">
                                    <label id="formGroupExampleInput4">Mobile Number</label>
                                    <input type="text" class="form-control" placeholder="*Country Code is required" />
                            </div>
                            <div class="form-group">
                                <label id="formGroupExampleInput5">Message</label>
                                <textarea class="form-control"  rows="3" placeholder="Request a Quote"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary send-btn">Send</button>
                        </form>
                  </div>
                </div>
            </div>


        </div>    
    )
}

export default  Contact;