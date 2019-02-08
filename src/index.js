import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter,Route} from "react-router-dom"

// 公共样式
import "./assets/css/main.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/jquery-weui.css";
import "./assets/css/swiper.min.css";
import "./assets/css/theme-color.css";
import "./assets/css/weui.min.css";


ReactDOM.render(
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>,
    document.getElementById('root')
);
