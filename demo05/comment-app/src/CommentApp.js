import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)  //这一步没想到，原来[有时候]还是可以直接使用this.state.x直接操作的.
    // 小提示：这里的代码直接往 state.comments 数组里面插入数据其实违反了 React.js 的 state 不可直接修改的原则 。但其实这个原则是为了 shouldComponentUpdate 的优化和变化的跟踪，而这种目的在使用 React-redux 的时候其实会自然而然达到，我们很少直接手动地优化，这时候这个原则就会显得有点鸡肋。所以这里为了降低大家的理解成本就不强制使用这个原则，有兴趣的朋友可以参考： Tutorial: Intro To React - React。
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput 
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp