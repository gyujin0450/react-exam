import React, { Component } from 'react'

export class TextAreaFrom extends Component {
  constructor (props) {
    super(props)
    this.state = {value: 'Hello'}
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)} >
          <textarea
            onChange = { e=> this.doChange(e)}
            value = { this.state.value }
          /><br />
          <input type='submit' value='결정'/>
        </form>
      </div>
    )
  }

  // 텍스트 에리어를 변경했을 때
  doChange (e) {
    this.setState({value: e.target.value})
  }

  // 입력 양식을 전솧했을때
  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }

} // end of TextAreaFrom
