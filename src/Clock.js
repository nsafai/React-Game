// Clock.js

import React, { Component } from 'react'
import DisplayTime from './DisplayTime'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  componentDidMount() { // wait for component to load into DOM once before upating
    this.interval = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000) // update once every 1sec
  }

  componentWillMount() { // cleanup
    clearInterval(this.interval)
  }

  render() {
    return (
      <DisplayTime date={this.state.date} />
    )
  }
}

export default Clock
