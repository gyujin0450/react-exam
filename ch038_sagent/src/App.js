import React, { Component } from 'react'
import './App.css'
import request from 'superagent'

class App extends Component {
  constructor (props) {
    super (props)
    // 상태를 초기화함
    this.state = {
      items: null
    }
  }
  // 마운트 됐을때
  componentWillMount () {
    // JSON 데이터 읽어 들이기
    request.get('./fruits.json')
      .accept('application/json')
      .end(( err, res) => {
        this.loadedJSON(err, res)
    })
  }
  
  // 데이터를 읽어 들였을때
  loadedJSON (err, res){
    if(err){
      console.log('JSON을 읽어 들이는 동안 오류가 발생했습니다...')
      return
    }
    // 상태를 변경함
    this.setState({
      items: res.body
    })
  }

  render () {
    // JSON 데이터를 제대로 읽어 들였는지 확인
    if(!this.state.items){
      return <div className='App'>
        읽어 들이는 중입니다..
      </div>
    }
    // 읽어 들인 데이를 기반으로 select 요소를 생성합니다.
    const options = this.state.items.map(e => {
      return <option value={e.price} key={e.name}>
        {e.name}
      </option>
    })

    return (
      <div className="App">
        과일: <select>{options}</select>
      </div>
    )
  }
}

export default App
