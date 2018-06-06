/*
 * @Author: jessica(gujing_hy@163.com) 
 * @Date: 2018-01-08 16:25:30 
 * @Last Modified by: jessica(gujing_hy@163.com)
 * @Last Modified time: 2018-06-06 13:37:14
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Icon extends Component{
    
    render() {
        const {name, className, onClick} = this.props
        const iconClass = classNames('icon', className, `icon-${name}`)
        return (
            <i className = {iconClass} onClick={onClick}></i>
        )
    } 
}

Icon.propTypes = {
    name: PropTypes.string
}