import React,{Component} from 'react';
import "./Reg.css";
import Regheader from "../regheader/Regheader";

class Reg extends Component{
    render() {
        return(
            <div>
                <Regheader></Regheader>
                <section className="zyw-container">
                    <div className="weui-cell mt-2">
                        <div className="weui-cell__hd"><label className="weui-label">手机号</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号"/>
                        </div>
                    </div>
                    <div className="weui-cell weui-cell_vcode">
                        <div className="weui-cell__hd">
                            <label className="weui-label">验证码</label>
                        </div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="tel" placeholder="请输入验证码"/>
                        </div>
                        <div className="weui-cell__ft">
                            <button className="weui-vcode-btn theme-color">获取验证码</button>
                        </div>
                    </div>
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">密码</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="password" placeholder="输入密码"/>
                        </div>
                    </div>
                    <div className="weui-cell">
                        <div className="weui-cell__hd"><label className="weui-label">确认密码</label></div>
                        <div className="weui-cell__bd">
                            <input className="weui-input" type="password" placeholder="确认密码"/>
                        </div>
                    </div>
                    <label htmlFor="weuiAgree" className="weui-agree">
                        <input id="weuiAgree" type="checkbox" className="weui-agree__checkbox"/>
	        <span className="weui-agree__text">
	        阅读并同意<a href="javascript:void(0);">《相关条款》</a>
	      </span>
                    </label>
                    <div className="login-btn"><a href="javascript:;"
                                                  className="weui-btn weui-btn_warn theme-bgcolor">注册</a></div>
                </section>
            </div>
        )
    }
}

export default Reg