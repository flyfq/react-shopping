import React,{Component} from 'react';
import "./Wares.css";
import {Link} from "react-router-dom"
import wares1 from "./wares1.png";
import wares2 from "./wares2.jpg";
import wares3 from "./ware3.jpg";
import wares4 from "./wares4.jpg";
import wares5 from "./ware5.jpg";

class Wares extends Component{
    render() {
        return(
            <div className="index-wares">
                <div className="wares-title"><img src={wares1}
                                                  alt=""/></div>
                <div className="wares-cont">
                    <ul className="clearfix">
                        {
                            this.props.list.map(item=>(
                                <li className="col-sm-6 col-xs-6 ware-box" key={item.productId}>
                                    <Link to={{pathname:"/item/"+item.productId,search:"?dataName="+this.props.dataName}}>
                                        <div className="ware-img">
                                            <img
                                                src={item.smallImage}
                                                alt=""/>
                                            <span className="ware-vip">vip专享</span>
                                        </div>
                                        <h3 className="ware-title">{item.productName}</h3>
                                        <p className="ware-des">{item.subTitle}</p>
                                        <span className="ware-prince red-color">￥{item.vipshopPrice}</span>
                                    </Link>
                                </li>
                            ))
                        }

                        {/*<li className="col-sm-6 col-xs-6 ware-box">*/}
                            {/*<a href="item.html">*/}
                                {/*<div className="ware-img">*/}
                                    {/*<img*/}
                                        {/*src={wares3}*/}
                                        {/*alt=""/>*/}
                                        {/*<span className="ware-vip">vip专享</span>*/}
                                {/*</div>*/}
                                {/*<h3 className="ware-title">Apple 苹果 iPhoneX 全新发布</h3>*/}
                                {/*<p className="ware-des">全网通 64G 深空灰</p>*/}
                                {/*<span className="ware-prince red-color">￥8088.00</span>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="col-sm-6 col-xs-6 ware-box">*/}
                            {/*<a href="item.html">*/}
                                {/*<div className="ware-img">*/}
                                    {/*<img*/}
                                        {/*src={wares4}*/}
                                        {/*alt=""/>*/}
                                        {/*<span className="ware-vip">vip专享</span>*/}
                                {/*</div>*/}
                                {/*<h3 className="ware-title">Apple 苹果 iPhoneX 全新发布</h3>*/}
                                {/*<p className="ware-des">全网通 64G 深空灰</p>*/}
                                {/*<span className="ware-prince red-color">￥8088.00</span>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="col-sm-6 col-xs-6 ware-box">*/}
                            {/*<a href="item.html">*/}
                                {/*<div className="ware-img">*/}
                                    {/*<img*/}
                                        {/*src={wares5}*/}
                                        {/*alt=""/>*/}
                                        {/*<span className="ware-vip">vip专享</span>*/}
                                {/*</div>*/}
                                {/*<h3 className="ware-title">Apple 苹果 iPhoneX 全新发布</h3>*/}
                                {/*<p className="ware-des">全网通 64G 深空灰</p>*/}
                                {/*<span className="ware-prince red-color">￥8088.00</span>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Wares