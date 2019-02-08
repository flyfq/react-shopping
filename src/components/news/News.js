import React,{Component} from 'react';
import "./News.css";

class News extends Component{
    render() {
        return(
            <div className="index-news">
                <div className="news-cont white-bgcolor">
                    <strong>最新<em>资讯</em>：</strong>
                    <div className="infoBox">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide"><a href="javascript:;"><span><i>热</i>酷购商城微信版上线啦！</span></a></li>
                            <li className="swiper-slide"><a href="javascript:;"><span>酷购商城微信版上线啦2！</span></a></li>
                            <li className="swiper-slide"><a href="javascript:;"><span>马上就要开学了，书包买买买！</span></a></li>
                        </ul>
                    </div>
                    <ul>
                        <li><a href="javascript:;"></a></li>
                    </ul>
                    <a href="" className="news-more">更多</a>
                </div>
            </div>
        )
    }
}

export default News