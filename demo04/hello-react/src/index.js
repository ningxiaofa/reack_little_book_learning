import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';
import './index.css';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class Index extends Component {
  render () {
    return (
      <div>
        {/* 这里 直接用循环计数器 i 作为 key是掩耳盗铃的做法[为什么？TBD], 记住一点：在实际项目当中，如果你的数据顺序可能发生变化，标准做法是最好是后台数据返回的 id 作为列表元素的 key */}
         {users.map((user, i) => <User key={i} user={user} />)}
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)