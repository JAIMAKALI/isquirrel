import React from 'react';
import Home from '../components/home';
import Service from "../components/service/service";
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Header from '../components/header';

var Routes  = ()=>{
    return(
       <BrowserRouter>
         <div className="main">
            <Header /> 
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Service} />
            </Switch>    
         </div>
       </BrowserRouter>
    )
}

export default Routes;