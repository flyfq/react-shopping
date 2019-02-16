import React,{Component} from 'react';
import "./Productlist.css";
import Search from "../../components/search/Search";
import Leftsidebar from "../../components/leftsidebar/Leftsidebar";
import Goodsbar from "../../components/goodsbar/Goodsbar";
import fetchJsonp from "fetch-jsonp";
let sTop = 0;
class Productlist extends Component{
    state={
        msg3:[]
    };
    componentDidMount() {
        window.scrollTo(0,sTop)
        // fetch(
        //     `https://api.douban.com/v2/movie/top250?start=0&count=10`
        // ).then(
        //     res=>res.json()
        // ).then(
        //     data=>this.setState({msg3:data})
        // )
        fetchJsonp(
            // `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=bulala`,
            `https://api.douban.com/v2/movie/top250?start=0&count=10`,
            // {
            //     jsonpCallback: 'cw', //回调函数key callback
            // }
        ).then(
            res => res.json()
        ).then(
            data => this.setState({msg3: data.subjects})
        )
    }
    componentWillUnmount() {
        sTop=document.documentElement.scrollTop
    }

    render() {
        return(
            <div>
            <Search></Search>
            <section  className = "zyw-container" >
            < div className = "class-cont clearfix" >
                <Leftsidebar></Leftsidebar>
                <Goodsbar msg3={this.state.msg3}></Goodsbar>
            </div>
            </section>
            </div>
        )
    }
}

export default Productlist