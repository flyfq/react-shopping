import React,{Component} from 'react';
import "./Findgroup.css";
class Findgroup extends Component{
    render() {
        return(
            <div className="find-group1">
                {
                    this.props.msg2.map(item=>(
                        <div className="find-group1-item mb-625 white-bgcolor" key={item.productId}>
                            <div className="group1-hd clearfix mb-625">
                                <div className="pull-left hd-img"><img src="img/user0.png" alt=""/></div>
                                <div className="pull-left">
                                    <p className="hd-name">{item.brandShowName}</p>
                                    <span className="hd-time">11月10日前</span>
                                </div>
                                <a href="" className="pull-right hd-take">+订阅</a>
                            </div>
                            <div className="group1-bd clearfix">
                                <div className="pull-left bd-l">
                                    <div className="bd-img"><img
                                        src={item.smallImage}
                                        alt=""/></div>
                                </div>
                                <div className="pull-right bd-r">
                                    <h4 className="bd-title">{item.subTitle}</h4>
                                    <span className="bd-intro">1.1万人浏览 2390件宝贝</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/*<div className="find-group1-item mb-625 white-bgcolor">*/}
                    {/*<div className="group1-hd clearfix mb-625">*/}
                        {/*<div className="pull-left hd-img"><img src="img/user4.png" alt=""/></div>*/}
                        {/*<div className="pull-left">*/}
                            {/*<p className="hd-name">艾佳生活</p>*/}
                            {/*<span className="hd-time">10月10日发布</span>*/}
                        {/*</div>*/}
                        {/*<a href="" className="pull-right hd-take">+订阅</a>*/}
                    {/*</div>*/}
                    {/*<div className="group1-bd clearfix">*/}
                        {/*<div className="pull-left bd-l">*/}
                            {/*<div className="bd-img"><img*/}
                                {/*src="https://img10.360buyimg.com/n4/jfs/t19768/164/187787594/229738/a7cbf352/5a6296c9Nf984db1f.jpg"*/}
                                {/*alt=""/></div>*/}
                        {/*</div>*/}
                        {/*<div className="pull-right bd-r">*/}
                            {/*<h4 className="bd-title">*/}
                                {/*席梦思（Simmons） 原装进口独立袋弹簧 软硬适中 艾乔安娜承托 灰蓝白 1500*2000*280灰蓝白 1500*2000*280*/}
                            {/*</h4>*/}
                            {/*<span className="bd-intro">1.1万人浏览 2390件宝贝</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="find-group1-item mb-625 white-bgcolor">*/}
                    {/*<div className="group1-hd clearfix mb-625">*/}
                        {/*<div className="pull-left hd-img"><img src="img/user3.png" alt=""/></div>*/}
                        {/*<div className="pull-left">*/}
                            {/*<p className="hd-name">小虾米</p>*/}
                            {/*<span className="hd-time">10月10日发布</span>*/}
                        {/*</div>*/}
                        {/*<a href="" className="pull-right hd-take">+订阅</a>*/}
                    {/*</div>*/}
                    {/*<div className="group1-bd clearfix">*/}
                        {/*<div className="pull-left bd-l">*/}
                            {/*<div className="bd-img"><img*/}
                                {/*src="https:////img11.360buyimg.com/babel/s120x120_jfs/t4642/88/2956500267/418343/5a43d35d/58f4f7d7Nec86838c.jpg!q90.webp"*/}
                                {/*alt=""/></div>*/}
                        {/*</div>*/}
                        {/*<div className="pull-right bd-r">*/}
                            {/*<h4 className="bd-title">*/}
                                {/*ML权力的游戏史塔克家族徽章印花短袖T恤1700140 黑色AK权力的游戏史塔克家族徽章印花短袖T恤1700140 黑色 L*/}
                            {/*</h4>*/}
                            {/*<span className="bd-intro">1.1万人浏览 2390件宝贝</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="find-group1-item mb-625 white-bgcolor">*/}
                    {/*<div className="group1-hd clearfix mb-625">*/}
                        {/*<div className="pull-left hd-img"><img src="img/user2.png" alt=""/></div>*/}
                        {/*<div className="pull-left">*/}
                            {/*<p className="hd-name">每天都坚果一下</p>*/}
                            {/*<span className="hd-time">10月10日发布</span>*/}
                        {/*</div>*/}
                        {/*<a href="" className="pull-right hd-take">+订阅</a>*/}
                    {/*</div>*/}
                    {/*<div className="group1-bd clearfix">*/}
                        {/*<div className="pull-left bd-l">*/}
                            {/*<div className="bd-img"><img*/}
                                {/*src="https://img13.360buyimg.com/n7/jfs/t14281/61/824785556/474495/2cb01128/5a3a3de7Nf6b6fe58.jpg"*/}
                                {/*alt=""/></div>*/}
                        {/*</div>*/}
                        {/*<div className="pull-right bd-r">*/}
                            {/*<h4 className="bd-title">*/}
                                {/*沃隆 每日坚果750g零食果干无添加混合坚果孕妇食品小包装礼盒 成人A款=25g*30袋*/}
                            {/*</h4>*/}
                            {/*<span className="bd-intro">1.1万人浏览 2390件宝贝</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Findgroup