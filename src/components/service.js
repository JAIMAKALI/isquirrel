import React,{Component} from "react";


var Service = ()=>{
    return(
        <div className="row mt-5">
                <div className="col-md-3">
                    <div class="card card-custom">
                        <div class="card-body">
                            <div className="img-center">
                              <img src="/images/android.png" className="card-image" />
                              <p className="card-content">
                                    Android Development
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card card-custom">
                        <div class="card-body">
                            <div className="img-center">
                              <img src="/images/combined-shape-copy.png" className="card-image" />
                              <p className="card-content">
                                    ios Development
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card card-custom">
                        <div class="card-body">
                            <div className="img-center">
                              <img src="/images/programming.png" className="card-image" />
                              <p className="card-content">
                                    Website Development
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card card-custom">
                        <div class="card-body">
                            <div className="img-center">
                              <img src="/images/smartphone-copy.png" className="card-image" />
                              <p className="card-content">
                                    App Development
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Service;