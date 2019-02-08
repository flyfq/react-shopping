import React,{Component} from 'react';
import Cartheader from "../cartheader/Cartheader";
import Carttop from "../carttop/Carttop";
import Cartbox from "../cartbox/Cartbox";
import Count from "../count/Count";
import "./Buycar.css";

class Buycar extends Component{
    render() {
        return(
            <form method="post" name="cart_form" target="_self" id="cart_form" action="">
                <Cartheader></Cartheader>
                <section className="zyw-container te">

                    <div className="commodity_list_box">
                        <Carttop></Carttop>
                        <Cartbox></Cartbox>
                    </div>

                </section>
                <Count></Count>
            </form>

        )
    }
}

export default Buycar