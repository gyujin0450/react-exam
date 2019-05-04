import React from 'react'
import ReactDOM from 'react-dom'
import { Actions } from './actions'
import {nameStore, messageStore} from './stores'

// View 정의
class AppView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: '', message: ''}
    // View와 Store를 연결함
    nameStore.onChange = () => {
      this.setState({name: nameStore.name})
    }
    messageStore.onChange = () => {
      this.setState({message: messageStore.message})
    }
  }
  // View에서는 Action을 던집니다
  render () {
    console.log('View.render')
    return (
      <div>
        <div>
          <input value={this.state.name}
                 onChange={(e) => Actions.changeName(e.target.value)}
          />
          <button onClick={(e) => Actions.submitName()}>등록</button>
        </div>
        <div>
          {this.state.message}
        </div>
      </div>
    )
  }
}

// DOM에 내용을 변경함
ReactDOM.render(
  <AppView />,
  document.getElementById('root')
)