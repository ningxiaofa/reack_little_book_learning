class LikeButton {
    constructor () {
        this.state = { isLiked: false }
    }

    setState (state) {
        const oldEl = this.el
        this.state = state
        this.el = this.render()
        if (this.onStateChange) this.onStateChange(oldEl, this.el)
    }

    changeLikeText () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        // console.log('this.state.isLiked');
      this.el = createDOMFromString(`
        <button class='like-btn'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `)
      this.el.addEventListener('click', this.changeLikeText.bind(this), false)
      return this.el
    }
  }

// ::String => ::Document //DOM 事件的 API 只有 DOM 结构才能用。[不能往一个字符串里面添加事件]
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

const wrapper = document.querySelector('.wrapper')

const likeButton = new LikeButton()
wrapper.appendChild(likeButton.render()) // 第一次插入 DOM 元素
likeButton.onStateChange = (oldEl, newEl) => {
  wrapper.insertBefore(newEl, oldEl) // 插入新的元素
  wrapper.removeChild(oldEl) // 删除旧的元素
}