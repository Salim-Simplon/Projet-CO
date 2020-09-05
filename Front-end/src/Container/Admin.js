import React, { Component } from 'react'
import Dashboard from '../Components/Dashboard'
import Foot from '../Components/foot'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Dashboard />
                <Foot />
            </div>
        )
    }
}
