import React , {Component} from 'react';

export default class OrdinaryProduct extends Component {

    render(){
        return (
            <div className ="grid_3">
                <a href="images/big1.jpg" className ="gal"><img src={this.props.info.img} alt="" /><span></span></a>

                {/* */}
                <div className ="add-to-cart-btn">
                </div>

                {/* */}
                <div className ="col2">
                    <div className ="col3"><a href="#">{this.props.info.title}</a></div>
                    <div className ="col3">{this.props.info.price}</div>
                </div>
            </div>
        );
    }

}