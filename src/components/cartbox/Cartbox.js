import React,{Component} from 'react';
import "./Cartbox.css";
import cart1 from "./cart1.jpg"
class Cartbox extends Component{
    render() {
        return(
            <div className="commodity_box">
                <div className="commodity_list">

                    <div className="tite_tim select">
                        <em aem="1" cart_id="84"></em>
                        <span>Apple产品专营店</span>
                        <div className="clear"></div>
                    </div>

                    <ul className="commodity_list_term">
                        <li className="select">
                            <em aem="0" cart_id="84"></em>
                            <img
                                src={cart1} alt=""/>
                            <div className="div_center">
                                <h4>新疆苹果</h4>
                                <span>50斤</span>
                                <p className="now_value">
                                    <i>￥</i>
                                    <b className="qu_su">123.00</b>
                                </p>
                            </div>
                            <div className="div_right">
                                <i>-</i>
                                <span className="zi">1</span>
                                <input type="hidden" value="84" />
                                    <i>+</i>
                            </div>
                        </li>
                        <li className="select">
                            <em aem="0" cart_id="84"></em>
                            <img
                                src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg" alt=""/>
                            <div className="div_center">
                                <h4>新疆苹果</h4>
                                <span>50斤</span>
                                <p className="now_value">
                                    <i>￥</i>
                                    <b className="qu_su">25.00</b>
                                </p>
                            </div>
                            <div className="div_right">
                                <i>-</i>
                                <span className="zi">1</span>
                                <input type="hidden" value="84"/>
                                    <i>+</i>
                            </div>
                        </li>
                    </ul>

                    <div className="shop_ul_bottom account_info_box">
                        <ul className="account_info">
                            <li className="i_text">
                                <span className="info_name xi_cu">包邮</span>
                                <span className="info_name">商家包邮</span>
                            </li>
                        </ul>
                    </div>
                    <div className="commodity_box">
                        <div className="commodity_list">

                            <div className="tite_tim select">
                                <em aem="1" cart_id="84"></em>
                                <span>Apple产品专营店</span>
                                <div className="clear"></div>
                            </div>

                            <ul className="commodity_list_term">
                                <li className="select">
                                    <em aem="0" cart_id="84"></em>
                                    <img
                                        src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                                    <div className="div_center">
                                        <h4>新疆苹果</h4>
                                        <span>50斤</span>
                                        <p className="now_value">
                                            <i>￥</i>
                                            <b className="qu_su">210.00</b>
                                        </p>
                                    </div>
                                    <div className="div_right">
                                        <i>-</i>
                                        <span className="zi">1</span>
                                        <input type="hidden" value="84"/>
                                            <i>+</i>
                                    </div>
                                </li>
                                <li className="select">
                                    <em aem="0" cart_id="84"></em>
                                    <img
                                        src="https://img13.360buyimg.com/mobilecms/s140x140_jfs/t3229/10/2021133198/376218/cfcc06cb/57d8e84eNfe92eae8.jpg"/>
                                    <div className="div_center">
                                        <h4>新疆苹果</h4>
                                        <span>50斤</span>
                                        <p className="now_value">
                                            <i>￥</i>
                                            <b className="qu_su">412.00</b>
                                        </p>
                                    </div>
                                    <div className="div_right">
                                        <i>-</i>
                                        <span className="zi">1</span>
                                        <input type="hidden" value="84" />
                                            <i>+</i>
                                    </div>
                                </li>
                            </ul>

                            <div className="shop_ul_bottom account_info_box">
                                <ul className="account_info">
                                    <li className="i_text">
                                        <span className="info_name xi_cu">包邮</span>
                                        <span className="info_name">商家包邮</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cartbox;