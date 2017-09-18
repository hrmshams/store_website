import React , {Component} from 'react';

import OrdinaryProduct from './OrdinaryProduct'

export default class OrdinaryProductsSec extends Component {

    render(){
        let info = {
            title : "title",
            img : "images/big1.jpg",
            price : "1000000"
        };
        return (
            <OrdinaryProduct info={info} />
        );
    }

}