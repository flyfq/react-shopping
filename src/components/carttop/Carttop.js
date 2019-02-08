import React,{Component} from 'react';
import "./Carttop.css";
class Carttop extends Component{
    render() {
        return(
            <div className="cart_top">
                <span>商品清单</span>
                <p id="weights">总重量约25kg</p>
                <div className="clear"></div>
            </div>
        )
    }
}

export default Carttop