import React,{Component} from "react";
import {NavLink} from "react-router-dom";


class Header extends Component{
    render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ml-5">
                            <img src="/images/logo1.jpg" className="logo-icon"/>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0 nav-cus">
                        <li className="nav-item mr-5">
                            <NavLink  className="nav-link" to="/" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item mr-5">
                            <NavLink  className="nav-link" to="#" activeClassName="active">Portfolio</NavLink>
                        </li>
                        <li className="nav-item mr-5">
                            <NavLink  className="nav-link" to="/services" activeClassName="active">Service</NavLink>
                            {/* <Link to="/services">Service</Link> */}
                        </li>
                        <li className="nav-item mr-5">
                            <NavLink  className="nav-link" to="/contact" activeClassName="active">Contact</NavLink >
                        </li>
                    </ul>    

                </div>
            </nav>
        </div>
    )
    }
}
        
export default Header;