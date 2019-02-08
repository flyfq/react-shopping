import React,{Component} from 'react';
import Navbar from "../common/navbar/Navbar";
import Footbar from "../common/footbar/Footbar";
import Error from "../common/error/error";
import List from "../components/list/List";
import Productlist from "../components/productlist/Productlist";
import Finding from "../components/finding/Finding";
import Buycart from "../components/buycar/Buycar";
import User from "../components/user/User";
import Item from "../components/item/Item";
import Login from "../components/login/Login"
import Reg from "../components/reg/Reg"

import {Route,Redirect,Switch} from "react-router-dom"

class App extends Component{
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/list" component={List}/>
                    <Route path="/productlist" component={Productlist}/>
                    <Route path="/finding" component={Finding}/>
                    <Route path="/user" component={User}/>
                    <Route path="/buycart" component={Buycart}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/item/:id" component={Item}/>
                    <Redirect exact from="/" to="/list"/>
                    <Route component={Error}/>
                </Switch>

                <Footbar></Footbar>
            </div>
        )
    }
}

export default App;