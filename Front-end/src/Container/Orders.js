import React, { Component } from 'react'
import Order from '../Components/Order'
import Foot from '../Components/foot'

export default class Orders extends Component {
    render() {
        return (
            <div>
                <Order />
                <Foot />
            </div>
        )
    }
}
