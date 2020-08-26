class Component {
    constructor (props = {}) {
        this.props = props
    }

    setState (state) {
        const oldEl = this.el
        this.state = state
        this._renderDOM()
        if (this.onStateChange) this.onStateChange(oldEl, this.el)
    }

    _renderDOM () {
        this.el = createDOMFromString(this.render())
        if (this.onClick) {
        this.el.addEventListener('click', this.onClick.bind(this), false)
        }
        return this.el
    }
}

// ::String => ::Document //DOM 事件的 API 只有 DOM 结构才能用。[不能往一个字符串里面添加事件]
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

const mount = (component, wrapper) => {
    wrapper.appendChild(component._renderDOM())
    component.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl)
        wrapper.removeChild(oldEl)
    }
}