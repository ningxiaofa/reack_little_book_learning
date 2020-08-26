
// 代码优化--增加可复用性
class LikeButton {
    render () {
        return `
        <button class='like-btn'>
            <span class='like-text'>赞</span>
            <span>👍</span>
        </button>
        `
    }
}

const wrapper = document.querySelector('.wrapper')
const likeButton1 = new LikeButton()
wrapper.innerHTML = likeButton1.render()

const likeButton2 = new LikeButton()
wrapper.innerHTML += likeButton2.render()

// 添加事件 -- 事件绑定不能写在上面dom元素渲染之前,因为之前的dom被替换，导致新生成的dom并没有绑定事件，所以点击事件不生效.
// 
const button = document.querySelector('.like-btn')
// console.log(button); // 只是获取第一个button， 所以只是绑定第一个button元素有点击事件
// 可以换成:
// const buttons = document.getElementsByClassName('like-btn')
// console.log(buttons);
// 同时添加事件,还要使用循环添加事件,这里暂时省略.

const buttonText = button.querySelector('.like-text')
let isLiked = false
button.addEventListener('click', () => {
    console.log('hello world');
    isLiked = !isLiked
    if (isLiked) {
        buttonText.innerHTML = '取消'
    } else {
        buttonText.innerHTML = '点赞'
    }
}, false)


