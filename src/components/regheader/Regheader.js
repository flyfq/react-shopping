import React,{Component} from 'react';
import {NavLink} from "react-router-dom"
import headReturn from "../../assets/img/svg/head-return.svg"
class Regheader extends Component{
    render() {
        return(
            <header className="zyw-header">
                <div className="zyw-container white-color">
                    <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img
                        src={headReturn} alt=""/></a></div>
                    <h1>注册</h1>
                    <div className="head-r">
                        <NavLink to={{pathname:"/login"}}>登录</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default Regheader