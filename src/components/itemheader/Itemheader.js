import React,{Component} from 'react';
import "./Itemheader.css";
import headReturn from "../../assets/img/svg/head-return.svg";
import headMore from "../../assets/img/svg/head-more.svg";
class Itemheader extends Component{
    render() {
        return(
            <header className="zyw-header">
                <div className="zyw-container white-color">
                    <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src={headReturn} alt=""/></a></div>
                <h1><a href="#" className="active">商品</a><a href="#item-precent">详情</a><a href="">评价</a></h1>
                <div className="head-r"><img src={headMore} alt=""/></div>
                </div>
        </header>
        )
    }
}

export default Itemheader