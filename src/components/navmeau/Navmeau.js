import React,{Component} from 'react';
import "./Navmeau.css";
import yqyl from "../../assets/img/yqyl.png";
import cjfl from "../../assets/img/cjfl.png";
import kbsc from "../../assets/img/kbsc.png";
import sjtx from "../../assets/img/sjtx.png";
import sjpj from "../../assets/img/sjpj.png";
class Navmeau extends Component{
    render() {
        return(
            <div className="index-class white-bgcolor">
                <div className="weui-flex">
                    <div className="weui-flex__item">
                        <a href="javascript:;">
                            <div className="index-class-img">
                                <img src={yqyl} alt=""/>
                            </div>
                            <p className="index-class-text">邀请有礼</p>
                        </a>
                    </div>
                    <div className="weui-flex__item">
                        <a href="javascript:;">
                            <div className="index-class-img">
                                <img src={cjfl} alt=""/>
                            </div>
                            <p className="index-class-text">春节福利</p>
                        </a>
                    </div>
                    <div className="weui-flex__item">
                        <a href="javascript:;">
                            <div className="index-class-img">
                                <img src={kbsc} alt=""/>
                            </div>
                            <p className="index-class-text">酷币商城</p>
                        </a>
                    </div>
                    <div className="weui-flex__item">
                        <a href="javascript:;">
                            <div className="index-class-img">
                                <img src={sjtx} alt=""/>
                            </div>
                            <p className="index-class-text">手机通讯</p>
                        </a>
                    </div>
                    <div className="weui-flex__item">
                        <a href="javascript:;">
                            <div className="index-class-img">
                                <img src={sjpj} alt=""/>
                            </div>
                            <p className="index-class-text">手机配件</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navmeau