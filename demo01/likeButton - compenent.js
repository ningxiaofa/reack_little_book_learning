// 代码优化--增加可复用性 -- 测试可正常运行
class LikeButton {
    constructor () {
        this.state = { isLiked: false }
    }

    changeLikeText () {
        const likeText = this.el.querySelector('.like-text')
        this.state.isLiked = !this.state.isLiked
        likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
    }

    render () {
      this.el = createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>点赞</span>
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

// 因为现在 render 返回的是 DOM 元素，所以不能用 innerHTML 暴力地插入 wrapper。而是要用 DOM API 插进去。
const likeButton1 = new LikeButton()
wrapper.appendChild(likeButton1.render())

const likeButton2 = new LikeButton()
wrapper.appendChild(likeButton2.render())
