import React, { Component } from 'react'
// import ReactDOM from 'react-dom' //如果引入或者定义组件，但并没有使用，react会有提示.
import './index.css'

export default class LikeButton extends Component {
  constructor () {
    super()
    this.state = {
        name: 'Tomy',
        isLiked: false
      }
  }

  handleClickOnLikeButton () {
    // console.log(this.state.isLiked) // 跟下下一行打印的结果是一样的.
    this.setState({
      isLiked: !this.state.isLiked //React.js 的 setState 把你的传进来的状态缓存起来，稍后才会帮你更新到 state 上
    })
    // console.log(this.state.isLiked)

    // this.setState((prevState) => {
    //     return { count: 0 }
    // })
    // this.setState((prevState) => {
    //     return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    // })
    // this.setState((prevState) => {
    //     return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    // })
    // console.log(this.state.count); // 最后的结果是 this.state.count 为 3, 但是第一次打印的结果是undefined，
    // 因为this.state中并没有定义count, 而且三次 this.setState操作实际上会合并从而组件只会重新渲染一次，
    // 所以，在使用 React.js 的时候，并不需要担心多次进行 setState 会带来性能问题。
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}