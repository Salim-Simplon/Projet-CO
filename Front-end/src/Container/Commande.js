import React, { Component } from 'react'
import Order from "../Components/panier";
import Foot from "../Components/foot";

export class Commande extends Component {
    render() {
        return (
            <div>
                <Order />
                <Foot />
            </div>
        )
    }
}

export default Commande
