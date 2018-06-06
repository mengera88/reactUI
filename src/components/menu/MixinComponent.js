/*
 * @Author: jessica(gujing_hy@163.com) 
 * @Date: 2018-01-09 10:08:34 
 * @Last Modified by: jessica(gujing_hy@163.com)
 * @Last Modified time: 2018-06-06 13:40:00
 */
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class MixinComponent extends Component {
    parent() {
        return this.context.component
    }
}

MixinComponent.contextTypes = {
    component: PropTypes.any
}