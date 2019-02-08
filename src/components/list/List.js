import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import Banner1 from "./banner1.jpg";
import Banner2 from "./banner2.jpg";
import Banner3 from "./banner3.jpg";
import Navmeau from "../../components/navmeau/Navmeau";
import News from "../../components/news/News";
import Seckill from "../../components/seckill/Seckill";
import Show from "../../components/show/Show"
import Wares from "../../components/wares/Wares"

import "./List.css";
class List extends Component{
    state={
        list:[]
    };
    componentDidMount(){
        fetch(
            `/data/products.data`
        ).then(
            res=>res.json()
        ).then(
            data=>this.setState({list:data})
        )
    }

    render() {
        return(
            <section className="zyw-container">
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
                <Navmeau></Navmeau>
                <News></News>
                <Seckill list={this.state.list} dataName="products"></Seckill>
                <Show></Show>
                <Wares list={this.state.list} dataName="products"></Wares>
            </section>
        )
    }
}

export default List