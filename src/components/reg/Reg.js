import React,{Component} from 'react';
import "./Reg.css";
import Regheader from "../regheader/Regheader";
import asynUser from "../../store/actions/asynUser";
import {connect} from "react-redux";

class Reg extends Component{
    state={
        username:"",
        password:""
    }
    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    render() {
        return(
            <div>
                <Regheader></Regheader>
                <section className="zyw-container">
                    <div className="weui-cell mt-2">
                        <div className="weui-cell__hd"><label className="weui-label">手机号</label></div>
                        <div className="weui-cell__bd">
                            <input name="username" value={this.state.username}  className="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" onChange={this.changeIpt.bind(this)}/>
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
                            <input name="password" value={this.state.password} className="weui-input" type="password" placeholder="输入密码" onChange={(ev)=>this.changeIpt(ev)}/>
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
                    <div className="login-btn" onClick={this.props.reg.bind(null,this.state.username,this.state.password,this.props.history)}><a href="javascript:;" className="weui-btn weui-btn_warn theme-bgcolor">注册</a></div>
                </section>
            </div>
        )
    }
}

const initMapStateToProps=state=>{
    return(
        {

        }
    )
}
const initMapDispatchToProps = dispatch=>({
    reg:(username,password,history)=>dispatch(asynUser({
        url:"http://localhost:3001/reactreg",
        username,password
    })).then(
        (auth)=>auth ?
            history.push({pathname:'/user'}) :
            history.push({pathname:'/login'})
    )
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Reg)