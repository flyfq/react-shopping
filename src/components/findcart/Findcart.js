import React,{Component} from 'react';
import "./Findcart.css";
class Findcart extends Component{
    render() {
        return(
            <div className="find-cart">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><a  className="cart-tab active">精选</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">直播</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">视频购</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">社区</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">家居生活</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">生鲜数码</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">个人洗护</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">海外直邮</a></div>
                    <div className="swiper-slide"><a  className="cart-tab">服饰鞋靴</a></div>
                </div>
            </div>
        )
    }
}

export default Findcart