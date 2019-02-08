import React,{Component} from 'react';
import {Link} from "react-router-dom"
import "./Seckill.css";
import seckill1 from "./seckill1.jpg";
import seckill2 from "./seckill2.jpg";
import seckill3 from "./seckill3.jpg";
import seckill4 from "./seckill4.jpg";
import seckill5 from "./seckill5.jpg";
class Seckill extends Component{
    render() {
        return(
            <div className="index-seckill white-bgcolor">
                <div className="seckill-hd">
                    <span className="seckill-hd-title red-color"><i className="fa fa-clock-o" aria-hidden="true"></i> 限时秒杀</span>
                    <strong>10点场</strong>
                    <div id="time"></div>
                    <div className="seckill-hd-r">秒抢好货 <i className="fa fa-angle-right theme-color"
                                                          aria-hidden="true"></i></div>
                </div>
                <div className="seckill-bd">
                    <div className="seckill-wares">
                        <div className="swiper-wrapper">
                            {
                                this.props.list.map(item=>(
                                    <div className="swiper-slide seckill-ware" key={item.productId}>
                                        <Link to={{pathname:"/item/"+item.productId,search:"?dataName="+this.props.dataName}}>
                                            <img src={item.smallImage} alt=""/>
                                            <p className="red-color">￥<strong>{item.vipshopPrice}</strong></p>
                                            <del>￥{item.marketPrice}</del>
                                        </Link>
                                        {/*<a href="item.html">*/}
                                        {/*<img src={seckill1} alt=""/>*/}
                                        {/*<p className="red-color">￥<strong>3800.00</strong></p>*/}
                                        {/*<del>￥12000.00</del>*/}
                                        {/*</a>*/}
                                    </div>
                                ))
                            }

                            {/*<div className="swiper-slide seckill-ware">*/}
                                {/*<a href="item.html">*/}
                                    {/*<img*/}
                                        {/*src={seckill2}*/}
                                        {/*alt=""/>*/}
                                        {/*<p className="red-color">￥<strong>89.90</strong></p>*/}
                                        {/*<del>￥128.89</del>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                            {/*<div className="swiper-slide seckill-ware">*/}
                                {/*<a href="item.html">*/}
                                    {/*<img*/}
                                        {/*src={seckill3}*/}
                                        {/*alt=""/>*/}
                                        {/*<p className="red-color">￥<strong>1900.00</strong></p>*/}
                                        {/*<del>￥2200.00</del>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                            {/*<div className="swiper-slide seckill-ware">*/}
                                {/*<a href="item.html">*/}
                                    {/*<img*/}
                                        {/*src={seckill4}*/}
                                        {/*alt=""/>*/}
                                        {/*<p className="red-color">￥<strong>35.00</strong></p>*/}
                                        {/*<del>￥38.00</del>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                            {/*<div className="swiper-slide seckill-ware">*/}
                                {/*<a href="item.html">*/}
                                    {/*<img*/}
                                        {/*src={seckill5}*/}
                                        {/*alt=""/>*/}
                                        {/*<p className="red-color">￥<strong>38.00</strong></p>*/}
                                        {/*<del>￥50.00</del>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Seckill