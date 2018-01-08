/*
 * @Author: jessica(hzgujing@corp.netease.com) 
 * @Date: 2018-01-05 16:11:56 
 * @Last Modified by: jessica(hzgujing@corp.netease.com)
 * @Last Modified time: 2018-01-08 14:48:06
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './menu.css'
import '../../style/index.css'

import MixinComponent from './MixinComponent'

export default class MenuItem extends MixinComponent {
    constructor(props) {
        super (props)
    }

    handleItemClick() {
        this.parent().handleMenuItemClick(this.props.command, this)
    }

    render() {
        const {className, children, disabled, divided} = this.props
        const meneItemClass = classNames('u-menu-item', className, {
            'disabled': disabled,
            'divided': divided
        })

        return (
            <div className={meneItemClass} onClick={this.handleItemClick.bind(this)}>
                {children}
            </div>
        )
    }
}

MenuItem.propTypes = {
    className: PropTypes.string
}