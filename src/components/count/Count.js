import React,{Component} from 'react';
import "./Count.css"
class Count extends Component{
    render() {
        return(
            <footer className="zyw-footer">
                <div className="zyw-container white-bgcolor">
                    <div className="settle_box">
                        <dl className="all_check select">
                            <dt>
                                <span id="all_pitch_on"></span>
                                <em>全选</em>
                            </dt>
                        </dl>
                        <dl className="total_amount">
                            <dt>
                                合计：
                                <p id="total_price">
                                    ¥<b>0</b>
                                </p>
                            </dt>
                            <dd>不含运费</dd>
                        </dl>
                        <input type="hidden" name="gcs" id="gcs"/>
                        <a className="settle_btn" href="javascript:void(0);" id="confirm_cart">去结算</a>
                        <a className="settle_btn" href="javascript:void(0);" id="confirm_cart1">删除</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Count