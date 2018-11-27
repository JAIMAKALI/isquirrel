import React from 'react';

var LogoDesigning = () => {
    return (
        <div className="container">
            <div className="row mt-5" style={{ marginBottom: 50 }}>
                <p className="text-center what-we-do">Logo Designing</p>
                <div className="col-md-8  offset-md-2">
                    <p className="Services-which-take">
                        Get your app designed professionally
                        </p>
                    <p className="We-aim-to-provide-yo lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <p className="We-aim-to-provide-yo lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 col-sm-2 col-4 offset-md-1">
                    <img src="/images/illustrator.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-4">
                    <img src="/images/ps.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-4">
                    <img src="/images/id.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-4">
                    <img src="/images/dw.png" />
                </div>
                <div className="col-md-2 col-sm-2 col-4">
                    <img src="/images/ae.png" />
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
                        <span className="diag-text">UX Research</span>
                        <img src="/images/group-13.png" className="diag-img" />
                        <span className="diag-text">Wireframing</span>
                        <img src="/images/group-13.png" className="diag-img" />
                        <span className="diag-text">Designing</span>
                        <img src="/images/group-12-copy-2.png" className="diag-img-1" />
                        <br />
                    </div>
                    <div className="diagram-2">
                        <span className="diag-text">Polishing</span>
                        <img src="/images/group-13.png" className="diag-img" />
                        <span className="diag-text">Prototyping</span>
                        <img src="/images/group-13.png" className="diag-img" />
                        <span className="diag-text">Feedback & Iteration</span>
                    </div>

                    <div className="row margin-row">
                        <div className="col-md-8  offset-md-2">
                            <p className="Services-which-take"> Have an idea </p>
                            <button className="btn idea btn-margin">Submit a Quote</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LogoDesigning;