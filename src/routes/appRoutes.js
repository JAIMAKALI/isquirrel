import React from 'react';
import Home from '../components/home';
import Service from "../components/service/service";
import Contact from "../components/contact";
import {Route,Router,Switch,BrowserRouter} from 'react-router-dom';
import Header from '../components/header';
import Footer  from "../components/footer";
import LogoDesigning from "../components/whatWeDo/logoDesigning";
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

var Routes  = ()=>{
    return(
       <BrowserRouter>
         <div className="main">
            <Header /> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Service} />
                <Route path="/contact" component={Contact} />
                <Route path="/logo-designing" component={LogoDesigning} />
            </Switch>   
            <Footer /> 
         </div>
       </BrowserRouter>
    )
}

export default Routes;