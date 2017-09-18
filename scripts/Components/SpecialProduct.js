import React , {Component} from 'react';

export default class SpecialProduct extends Component {

    constructor(props){
        super(props);

        {
            /*
             props!

             this.img = this.props.info.img;
             this.title = this.props.info.title;
             this.explanation = this.props.info.explanation;
             this.price = this.props.info.price;
             */
        }
    }

    render(){
        return (
            <div className="grid_3">
                <div className ="box maxheight">
                    <img src={this.props.product_info.img} alt="" />
                    <div className ="title">{this.props.product_info.title}</div>
                    <p>{this.props.product_info.explanation}</p>
                    <span>قیمت :</span> <span>{this.props.product_info.price}</span>
                    <br />
                    <a href="#">اطلاعات بیشتر</a>
                    <div className ="button">
                        <a href="#">اضافه کردن به سبد خرید</a>
                    </div>
                </div>
            </div>
        );
    }

}
