import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './dropdown.css'
import '../../style/index.css'

export default class Dropdown extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        const {className} = this.props

        return (
            <div className={`u-dropdown ${className ? className : ''}`}>

            </div>
        )
    }
}

Dropdown.propTypes = {
    className: PropTypes.string
}