import React from 'react';
import { NavLink } from "react-router-dom"
import foothome from "../../assets/img/svg/foot-1-1.svg"
import footlist from "../../assets/img/svg/foot-2.svg"
import footfinding from "../../assets/img/svg/foot-3.svg"
import footcart from "../../assets/img/svg/foot-4.svg"
import footuser from "../../assets/img/svg/foot-5.svg"
const Footbar  = (props)=>(
        <footer className="zyw-footer">
            <div className="zyw-container white-bgcolor clearfix">
                <div className="weui-tabbar">
                    <NavLink to={{pathname:"/list"}} className="weui-tabbar__item weui-bar__item--on" >
                        <div className="weui-tabbar__icon">
                            <img src={foothome} alt=""/>
                        </div>
                        <p className="weui-tabbar__label">首页</p>
                    </NavLink>
                    {/*<a href="index.html" className="weui-tabbar__item weui-bar__item--on">*/}
                        {/*<div className="weui-tabbar__icon">*/}
                            {/*<img src={foothome} alt=""/>*/}
                        {/*</div>*/}
                        {/*<p className="weui-tabbar__label">首页</p>*/}
                    {/*</a>*/}
                    <NavLink to={{pathname:"/productlist"}} className="weui-tabbar__item">
                        <div className="weui-tabbar__icon">
                            <img src={footlist} alt=""/>
                        </div>
                        <p className="weui-tabbar__label">分类</p>
                    </NavLink>
                    {/*<a href="class.html" className="weui-tabbar__item">*/}
                        {/*<div className="weui-tabbar__icon">*/}
                            {/*<img src={footlist} alt=""/>*/}
                        {/*</div>*/}
                        {/*<p className="weui-tabbar__label">分类</p>*/}
                    {/*</a>*/}
                    <NavLink to={{pathname:"/finding"}} className="weui-tabbar__item">
                        <div className="weui-tabbar__icon">
                            <img src={footfinding} alt=""/>
                        </div>
                        <p className="weui-tabbar__label">发现</p>
                    </NavLink>
                    {/*<a href="find.html" className="weui-tabbar__item">*/}
                        {/*<div className="weui-tabbar__icon">*/}
                            {/*<img src={footfinding} alt=""/>*/}
                        {/*</div>*/}
                        {/*<p className="weui-tabbar__label">发现</p>*/}
                    {/*</a>*/}
                    <NavLink to={{pathname:"/buycart"}} className="weui-tabbar__item">
                        <span className="weui-badge" style={{"position": "absolute","top": "-.4em","right": "1em"}}>8</span>
                        <div className="weui-tabbar__icon">
                            <img src={footcart} alt=""/>
                        </div>
                        <p className="weui-tabbar__label">购物车</p>
                    </NavLink>
                    {/*<a href="cart.html" className="weui-tabbar__item">*/}
                        {/*<span className="weui-badge" style={{"position": "absolute","top": "-.4em","right": "1em"}}>8</span>*/}
                        {/*<div className="weui-tabbar__icon">*/}
                            {/*<img src={footcart} alt=""/>*/}
                        {/*</div>*/}
                        {/*<p className="weui-tabbar__label">购物车</p>*/}
                    {/*</a>*/}
                    <NavLink to={{pathname:"/user"}} className="weui-tabbar__item">
                        <div className="weui-tabbar__icon">
                            <img src={footuser} alt=""/>
                        </div>
                        <p className="weui-tabbar__label">我的</p>
                    </NavLink>
                    {/*<a href="home.html" className="weui-tabbar__item">*/}
                        {/*<div className="weui-tabbar__icon">*/}
                            {/*<img src={footuser} alt=""/>*/}
                        {/*</div>*/}
                        {/*<p className="weui-tabbar__label">我的</p>*/}
                    {/*</a>*/}
                </div>
            </div>
        </footer>
)

export default Footbar