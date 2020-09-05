import React, { Component } from 'react';
import Home from '../Components/Home';
import Foot from '../Components/foot'


export class Accueil extends Component {
    render() {
        return (
            <div>
                <Home/>
                <Foot />
            </div>
        )
    }
}

export default Accueil