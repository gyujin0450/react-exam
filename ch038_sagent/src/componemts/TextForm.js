import React, { Component } from 'react'

export class TextFrom extends Component {
  constructor (props) {
    super (props)
    this.state = { value: ''}
  }
  render () {
    // 입력 양식에 테스트박스 지정
    return (
      <div>
        <form onSubmit={ e => this.doSubmit(e)}>
          <input type='text'
            onChange={e => this.doChange(e)}
            value={this.state.value} />
          <input type='submit' />
        </form>
      </div>
    )
  }

  // 텍스트 박스를 변경했을때
  doChange(e){
    this.setState({value: e.target.value})
  }

  doSubmit(e){
    e.preventDefault()
    window.alert(this.state.value)
  }
} // end of TextForm