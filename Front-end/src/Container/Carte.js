import React, { Component } from 'react';
import Product from '../Components/product'
import Foot from '../Components/foot';

export class Carte extends Component {
    render() {
        return (
            <div>
                <Product />
                <Foot/>
            </div>
        )
    }
}

export default Carte
