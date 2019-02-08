import React,{Component} from 'react';
import headReturn from "../../assets/img/svg/head-return.svg";
class Cartheader extends Component{
    render() {
        return(
            <header className="zyw-header">
                <div className="zyw-container white-color">
                    <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img
                        src={headReturn} alt=""/></a></div>
                    <h1>购物车</h1>
                    <div className="head-r"><a href="">编辑</a></div>
                </div>
            </header>
        )
    }
}

export default Cartheader