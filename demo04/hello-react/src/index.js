import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './components/LikeButton';
import './index.css';

class Index extends Component {
  constructor () {
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }

  // 这里是,组件的使用者[Index]可以主动地通过重新渲染的方式把新的 props 传入组件[LikeButton]当中，这样这个组件中由 props 决定的显示形态也会得到相应的改变。
  handleClickOnChange () {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }

  render () {
    return (
      <div>
         <LikeButton 
         likedText={this.state.likedText}
         unlikedText={this.state.unlikedText} />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)