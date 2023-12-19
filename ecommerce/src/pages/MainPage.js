import React, { Component } from 'react'

import Slider from '../components/Slider'
import Tab from '../components/Tab'


export default class MainPage extends Component {

    render() {
        return (
            <>

                <Slider />
                <Tab products={this.props.products} />
            </>
        )
    }
}
