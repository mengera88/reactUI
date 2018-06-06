/*
 * @Author: jessica(gujing_hy@163.com) 
 * @Date: 2018-01-08 16:25:23 
 * @Last Modified by: jessica(gujing_hy@163.com)
 * @Last Modified time: 2018-06-06 13:39:55
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './menu.css'
import '../../style/index.css'

import MixinComponent from './MixinComponent'

export default class MenuTitle extends MixinComponent {
    render() {
        const {className, children} = this.props
        const meneItemClass = classNames('u-menu-title', className)

        return (
            <div className={meneItemClass}>{children}</div>
        )
    }
}

MenuTitle.propTypes = {
    className: PropTypes.string
}