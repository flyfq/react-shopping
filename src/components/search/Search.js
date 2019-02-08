import React,{Component} from 'react';
import headReturn from "../../assets/img/svg/head-return.svg"
class Search extends Component{
    render() {
        return(
            <header className="zyw-header">
                <div className="zyw-container white-color">
                    <div className="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img
                        src={headReturn} alt=""/></a></div>
                    <div className="head-search">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="text" placeholder="输入您当前要搜索的商品" className="white-color"/>
                    </div>
                    <div className="head-r"><a href="">取消</a></div>
                </div>
            </header>
        )
    }
}

export default Search