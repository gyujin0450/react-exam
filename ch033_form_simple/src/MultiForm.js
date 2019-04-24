// 3.2.3 여러개의 입력 항목을 가진 입력 양식 만들기
import React, { Component } from 'react'

// 여러 개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '윤인성',
      age: 25,
      hobby: '독서'
    }
  }

  // 값이 변경됐을 때
  // index.js:1437 Warning: A component is changing a controlled input of type text to be uncontrolled.
  // Input elements should not switch from controlled to uncontrolled (or vice versa).
  // Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  // More info: https://fb.me/react-controlled-components
  doChange (e) {
    const userValue = e.target.value
    const key = e.target.name
    // console.log(`${key} : ${userValue}`)

    this.setState({ [key]: userValue })
  }

  // 전송 번튼을 눌렀을 때
  doSubmit (e) {
    e.preventDefault()
    // let n = this.state.name
    // let a = this.state.age
    // let h = this.state.hobby
    // console.log(n, a, h)

    const j = JSON.stringify(this.state)
    window.alert(j)
  }

  // 화면렌더링
  render () {
    // 이벤트를 메서드에 바인딩
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
      <form onSubmit={doSubmit}>
        <div><label>
          이름: <br />
          <input name='name' type='text' value={this.state.name} onChange={doChange} />
        </label></div>
        <div><label>
          나이: <br />
          <input name='age' type='number' value={this.state.age} onChange={doChange} />
        </label></div>
        <div><label>
          취미: <br />
          <input name='hobby' type='text' value={this.state.hobby} onChange={doChange} />
        </label></div>
        <input type='submit' value='전송' />
      </form>
    )
  }
}
