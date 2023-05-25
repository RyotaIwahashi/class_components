import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      anecdotes: [],
      current: 0,
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/anecdotes').then(res => {
      this.setState({
        anecdotes: res.data
      })
    })
  }

  render() {
    if (this.state.anecdotes.length === 0) {
      return <div>no anecdotes...</div>
    }

    return (
      <div>
        <h1>anecdote of the day</h1>
        <div>
          {this.state.anecdotes[this.state.current].content}
        </div>
      </div>
    )
  }
}

export default App
