import React,{Component} from 'react';
import headReturn from "../../assets/img/svg/head-return.svg";
import {NavLink} from "react-router-dom"
class Loginheader extends Component{
    render() {
        return(
            <header className="zyw-header">
                <div className="zyw-container white-color">
                    <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self">
                        <img src={headReturn} alt=""/></a></div>
                    <h1>登录</h1>

                    <div className="head-r">
                        <NavLink to={{pathname:"/reg"}}>注册</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default Loginheader