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

  handleClick = () => {
    const current = Math.floor(
      Math.random() * this.state.anecdotes.length
    )
    this.setState({
      current: current
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
        <button onClick={this.handleClick}>next</button>
      </div>
    )
  }
}

export default App



// Functional component の場合は以下のようになる
// Functional component を使用する注目すべき利点は、JavaScript クラスの自己参照 this を意識する必要がないこと
// const App = () => {
//   const [anecdotes, setAnecdotes] = useState([])
//   const [current, setCurrent] = useState(0)

//   useEffect(() =>{
//     axios.get('http://localhost:3001/anecdotes').then(response => {
//       setAnecdotes(response.data)
//     })
//   },[])

//   const handleClick = () => {
//     setCurrent(Math.round(Math.random() * (anecdotes.length - 1)))
//   }

//   if (anecdotes.length === 0) {
//     return <div>no anecdotes...</div>
//   }

//   return (
//     <div>
//       <h1>anecdote of the day</h1>
//       <div>{anecdotes[current].content}</div>
//       <button onClick={handleClick}>next</button>
//     </div>
//   )
// }
