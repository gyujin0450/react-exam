import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
} // end of App class

// DOM의 내용을 변경합니다
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
