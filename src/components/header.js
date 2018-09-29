import React from "react";


var Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ml-5">
                            <img src="/images/logo-4-copy.png"/>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>    

                </div>
            </nav>
        </div>
    )
}
        
export default Header;