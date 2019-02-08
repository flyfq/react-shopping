import React,{Component} from 'react';
import "./Itemfoot.css";
import itemL from "../../assets/img/svg/item-1.svg";
import item2 from "../../assets/img/svg/item-2.svg";
import item3 from "../../assets/img/svg/item-3.svg"
class Itemfoot extends Component{
    render() {
        return(

            <footer className="zyw-footer">
                <div className="zyw-container white-bgcolor clearfix">
                    <div className="col-sm-2 col-xs-2">
                        <a href="javascript:;" className="weui-tabbar__item">
                            <div className="weui-tabbar__icon">
                                <img src={itemL} alt=""/>
                            </div>
                            <p className="weui-tabbar__label">店铺</p>
                        </a>
                    </div>
                    <div className="col-sm-2 col-xs-2">
                        <a href="cart.html" className="weui-tabbar__item">
                            <span className="weui-badge" style={{"position":"absolute","top": "-.4em","right":"1em"}}>8</span>
                            <div className="weui-tabbar__icon">
                                <img src={item2} alt=""/>
                            </div>
                            <p className="weui-tabbar__label">购物车</p>
                        </a>
                    </div>
                    <div className="col-sm-2 col-xs-2">
                        <a href="javascript:;" className="weui-tabbar__item">
                            <div className="weui-tabbar__icon">
                                <img src={item3} alt=""/>
                            </div>
                            <p className="weui-tabbar__label">收藏</p>
                        </a>
                    </div>
                    <div className="col-sm-3 col-xs-3">
                        <a href="" className="footer-btn footer-warning">立即购买</a>
                    </div>
                    <div className="col-sm-3 col-xs-3">
                        <a href="" className="footer-btn footer-danger">加入购物车</a>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Itemfoot