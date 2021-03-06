import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
// import _ from 'lodash'

import './menu.css'
import '../../style/index.css'

import classNames from 'classnames'

import MixinComponent from './MixinComponent'

export default class MenuContent extends MixinComponent {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
        this.state = {
            scrollTop: 0
        }
    }


    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        this.scrollControl(el)
    }


    scrollControl(el) {
        const parent = this.parent()
        if (el.offsetHeight < el.scrollHeight) {
            parent.overflowBottomControl(true)
        } else {
            parent.overflowBottomControl(false)
        }
        
        if (el.scrollTop === el.scrollHeight - el.offsetHeight) {
            parent.overflowBottomControl(false)
        }
        
        if (el.scrollTop > 0) {
            parent.overflowTopControl(true)
        } else {
            parent.overflowTopControl(false)
        }
    }
    
    handleScroll(e) {
        const el = ReactDOM.findDOMNode(this);
        const parent = this.parent()
        this.scrollControl(el)
        parent.setScrollTop(el.scrollTop)
    }

    /**
     * 防止下拉到最低端时页面也随之滚动
     * @param {domEvent} e wheel事件
     */
    handleWheel(e) {
        const deltaY = e.deltaY
        const el = ReactDOM.findDOMNode(this);
        if (deltaY > 0 && el.scrollTop === el.scrollHeight - el.offsetHeight) {
            e.preventDefault()
        }
    }
    
    render() {
        const {className, children} = this.props
        const contentClass = classNames('content', className)

        return (
            <div className={contentClass} onScroll={this.handleScroll} onWheel={this.handleWheel.bind(this)}>
                {children}
            </div>
        )
    }
}

MenuContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
}