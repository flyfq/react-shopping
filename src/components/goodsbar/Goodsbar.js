import React,{Component} from 'react';
import "./Goodsbar.css";
import class1 from "./class1.jpg"
class Goodsbar extends Component{
    render() {
        return(
            <div id="myTabContent" className="tab-content class-bd white-bgcolor">
                <div className="tab-pane fade in active" id="nznz">
                    <div className="class-bd-cont">
                        <div className="bd-box">
                            <h4 className="bd-box-title">热卖选购</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    {
                                        this.props.msg3.map(item=>(
                                            <div className="col-xs-4 info-item">
                                                <img
                                                src={item.images.medium}
                                                alt=""/>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                                    }
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                        {/*<p>时尚羽绒</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>保暖棉服</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>修身夹克</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>牛仔裤</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>加厚牛仔</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>宽松卫衣</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>连衣裙</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-xs-4 info-item">*/}
                                        {/*<img*/}
                                            {/*src={class1}*/}
                                            {/*alt=""/>*/}
                                            {/*<p>婚纱</p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="bd-box">
                            <h4 className="bd-box-title">女装</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>新款大衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>连衣裙</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>针织衫</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>毛衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>宽松卫衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>外套</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>阔腿裤</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bd-box">
                            <h4 className="bd-box-title">童装</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>品质童装</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>套装</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>裙子</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>亲子装</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nxnx">
                    <div className="class-bd-cont">
                        <div className="bd-box">
                            <h4 className="bd-box-title">流行男鞋</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>休闲鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>商务鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>正装鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>帆布鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>板鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>乐福鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>拖鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>传统布鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>凉鞋</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bd-box">
                            <h4 className="bd-box-title">时尚女鞋</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>休闲鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>女靴</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>短靴</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>马丁靴</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>帆布鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>高跟鞋</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>通勤OL</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>凉鞋</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nyps">
                    <div className="class-bd-cont">
                        <div className="bd-box">
                            <h4 className="bd-box-title">保暖内衣</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>保暖内衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>保暖裤</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>男士保暖</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>女士保暖</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>保暖套装</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>秋衣秋裤</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>薄款保暖</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bd-box">
                            <h4 className="bd-box-title">大牌文胸</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>文胸</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>文胸套装</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>光面文胸</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>少女文胸</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>大码文胸</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>薄杯文胸</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bd-box">
                            <h4 className="bd-box-title">睡衣</h4>
                            <div className="bd-box-info">
                                <div className="row">
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>女式睡衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>男式睡衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>情侣睡衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>全棉睡衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>珊瑚绒睡衣</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>睡裙</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>睡袍</p>
                                    </div>
                                    <div className="col-xs-4 info-item">
                                        <img
                                            src={class1}
                                            alt=""/>
                                            <p>真丝睡衣</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Goodsbar