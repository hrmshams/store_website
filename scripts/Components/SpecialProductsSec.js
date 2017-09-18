import React , {Component} from 'react';
import SpecialProduct from './SpecialProduct';

export default class SpecialProductsSec extends Component {

    constructor(props){
        super(props);
    }

    render(){
        let product_info = {
            title : "title!",
            explanation : "explanation!",
            img : "images/special_products/box_img1.jpg",
            price : "price!"
        };
        return (
            <div>
                <div className="grid_12">
                    <h3>محصولات ویژه</h3>
                </div>
                <SpecialProduct product_info = {product_info}/>
            </div>
        );
    }

}
