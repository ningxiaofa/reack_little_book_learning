import React, { Component } from 'react'

export default class LikeButton extends Component {
  // React.js 提供的默认配置写法
  // static defaultProps = {
  //   likedText: '取消',
  //   unlikedText: '点赞'
  // }

  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })

    // 这个是父组件传递过来的参数[这里是函数],不传递不会有报错,this.props.onClick的值是undefined
    if (this.props.onClick) {  
      this.props.onClick()  //执行函数
    }
  }

  render () {
    // 其中用到了默认值的写法, 推荐使用react定义的默认值写法
    // const likedText = this.props.likedText || '取消'
    // const unlikedText = this.props.unlikedText || '点赞'
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {/* {this.state.isLiked ? likedText : unlikedText} 👍 */}
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
      </button>
    )
  }
}