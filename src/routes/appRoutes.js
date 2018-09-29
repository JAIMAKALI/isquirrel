import React from 'react';
import Home from '../components/home';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Header from '../components/header';

var Routes  = ()=>{
    return(
       <BrowserRouter>
         <div className="main">
            <Header /> 
            <Switch>
                <Route Path="/" component={Home}/>
            </Switch>    
         </div>
       </BrowserRouter>
    )
}

export default Routes;