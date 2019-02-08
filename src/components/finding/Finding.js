import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import "./Finding.css";
import Findheader from "../findheader/Findheader"
import Findcart from "../findcart/Findcart";
import Findgroup from "../findgroup/Findgroup";
import Banner1 from "./banner1.jpg";
import Banner2 from "./banner2.jpg";
import Banner3 from "./banner3.jpg";
class Finding extends Component{
    state={
        msg2:[]
    };
    componentDidMount() {
        fetch(
            `/data/find.data`
        ).then(
            res=>res.json()
        ).then(
            data=>this.setState({msg2:data})
        )
    }

    render() {
        return(

            <section className="zyw-container">
                <Findheader></Findheader>
                <Findcart></Findcart>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto:1000
                    }}

                >
                    <div><img src={Banner1} alt=""/></div>
                    <div><img src={Banner2} alt=""/></div>
                    <div><img src={Banner3} alt=""/></div>
                </ReactSwipe>
                <Findgroup msg2={this.state.msg2} dataName="find"></Findgroup>
            </section>

        )
    }
}

export default Finding