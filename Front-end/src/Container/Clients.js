import React, { Component } from 'react';
import Client from '../Components/Client'
import Foot from '../Components/foot';

export class Clients extends Component {
    render() {
        return (
            <div>
                <Client />
                <Foot/>
            </div>
        )
    }
}

export default Clients