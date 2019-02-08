import React,{Component} from 'react';
import "./Show.css";
import show1 from "./show1.gif";
import show2 from "./show2.png";
import show3 from "./show3.png";
import show4 from "./show4.png";
import show5 from "./show5.png";
import show6 from "./show6.png";
class Show extends Component{
    render() {
        return(
            <div className="index-show clearfix">
                <div className="col-sm-12 col-xs-12">
                    <a className="sc-gPEVay jZmIRd" href=""><img
                        src={show1} alt=""/></a>
                </div>
                <div className="col-sm-6 col-xs-6">
                    <a className="sc-gPEVay jZmIRd" href=""><img
                        src={show2}
                        alt=""/></a>
                </div>
                <div className="col-sm-6 col-xs-6">
                    <a className="sc-gPEVay jZmIRd" href=""><img
                        src={show3}
                        alt=""/></a>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <a className="sc-gPEVay jZmIRd" href=""><img
                        src={show4}
                        alt=""/></a>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <a className="sc-gPEVay jZmIRd" href=""><img
                        src={show5}
                        alt=""/></a>
                </div>
                <div className="col-sm-4 col-xs-4">
                    <a className="sc-gPEVay jZmIRd" href=""><img
                        src={show6}
                        alt=""/></a>
                </div>
            </div>
        )
    }
}

export default Show