import React, { Component } from 'react'
import './App.css'

// SuperAgent 사용 선언 (3.7)
import request from 'superagent'

// 입력 양식 다루기(3.8)
import { TextFrom } from './componemts/TextForm'
import { CBoxForm } from './componemts/CBoxForm'
import { TextAreaFrom } from './componemts/TextAreaFrom'
import { RadioForm } from './componemts/RadioForm'
import { SelectForm } from './componemts/SelectForm'

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
        <p>3.7.3 JSON을 읽어 선택박스 만들기</p>
        과일: <select>{options}</select>
        <hr />
        <p>3.8.1 텍스트 박스</p>
        <TextFrom />
        <hr />
        <p>3.8.2 텍스트 박스</p>
        <CBoxForm />
        <hr />
        <p>3.8.3 텍스트 에리어</p>
        <TextAreaFrom />
        <hr />
        <p>3.8.4 라디어 버튼</p>
        <RadioForm items={['초콜릿','과자','콜라']} />
        <hr />
        <p>3.8.5 선택박스</p>
        <SelectForm items={['초콜릿','과자','콜라']} value='콜라'/>
      </div>)
  }
}

export default App