import React,{Component} from 'react';
import "./Login.css";
import Loginheader from "../loginheader/Loginheader";
import mylogo from "../../assets/img/mylogo.png"
class Login extends Component{
    render() {
        return(
            <div>
            <Loginheader></Loginheader>
            < section className = "zyw-container" >
            < div className = "login-img" >
                < img src = {mylogo} alt = "" /> </div>
        <div className="weui-cells">
            <div className="weui-cell weui-cell_select weui-cell_select-before">
                <div className="weui-cell__hd">
                    <select className="weui-select" name="select2">
                        <option value="1">+86</option>
                        <option value="2">+80</option>
                        <option value="3">+84</option>
                        <option value="4">+87</option>
                    </select>
                </div>
                <div className="weui-cell__bd">
                    <input className="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号"/>
                </div>
            </div>
        </div>
        <div className="weui-cells">
            <div className="weui-cell">
                <div className="weui-cell__bd">
                    <input className="weui-input" type="password" placeholder="请输入密码"/>
                </div>
            </div>
        </div>
        <div className="weui-cells__tips text-right"><a href="##">忘记密码？</a></div>
        <div className="login-btn"><a href="##" className="weui-btn weui-btn_warn theme-bgcolor">登录</a></div>
    </section>
            </div>
        )
    }
}

export default Login