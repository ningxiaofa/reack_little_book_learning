import React, { Component } from 'react'
// import Header from './Header'
import Clock from './Clock'

class Index extends Component {
    constructor() {
      super()
      this.state = {
        // isShowHeader: true,
        isShowClock: true
      }
    }
  
    handleShowOrHide () {
      this.setState({
        // isShowHeader: !this.state.isShowHeader,
        isShowClock: !this.state.isShowClock
      })
    }
  
    render () {
      return (
        <div>
            {/* {this.state.isShowHeader ? <Header /> : null} */}
            {this.state.isShowClock ? <Clock /> : null }
            <button onClick={this.handleShowOrHide.bind(this)}>
                显示或者隐藏时钟
            </button>
        </div>
      )
    }
  }
  
  export default Index