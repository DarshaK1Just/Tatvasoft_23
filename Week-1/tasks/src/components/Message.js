import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state ={
            message: 'Welcome People !!'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thanks for Subscribing! Visit Again Anytime !!'
        })
    }
    render() {
  return (
    <div>
        <h1> {this.state.message} </h1>
        <button onClick={() => this.changeMessage()}>Subscribe Here</button>
    </div>
  )
}
}

export default Message
