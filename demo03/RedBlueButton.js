 class RedBlueButton extends Component {
    constructor (props) {
      super(props)
      this.state = {
        color: 'red'
      }
    }

    onClick () {
      this.setState({
        color: this.state.color == 'blue' ? 'red' : 'blue'
      })
    }

    render () {
      return `
        <button style='color: ${this.state.color};'>${this.state.color} <span>👍</span></button>
      `
    }
  }