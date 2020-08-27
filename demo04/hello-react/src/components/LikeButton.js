import React, { Component } from 'react'

export default class LikeButton extends Component {
  // React.js 提供的默认props配置写法
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    // 尝试修改props的值，会出现报错. 因为是只读属性[LikeButton.js:17 Uncaught TypeError: Cannot assign to read only property 'likedText']
    // props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件[这里是Index组件]主动重新渲染的方式来传入新的 props，从而达到更新的效果。
    // this.props.likedText = '取消'
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
       <button onClick={this.handleClickOnLikeButton.bind(this)}>
       {this.state.isLiked
         ? this.props.likedText
         : this.props.unlikedText} 👍
      </button>
    )
  }
}