import React , {Component} from 'react';
import ReactDOM from 'react-dom';

import SpecialProductsSec from './Components/SpecialProductsSec';
import OrdinaryProductsSec from './Components/OrdinaryProductsSec';


{/* rendering the special products! */}
ReactDOM.render(<SpecialProductsSec />, document.getElementById('special-products'));

{/* rendering the ordinary products! */}
ReactDOM.render(<OrdinaryProductsSec />, document.getElementById('ordinary_products'));

