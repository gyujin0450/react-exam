import React, { Component } from 'react'

export class SelectForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: props.items,
      value: props.value
    }
  }

  render () {
    // 선택박스 생성
    const options = this.state.items.map(i => {
      return (
        <option key={i} value={i} >{i}</option>
      )
    })

    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)} >
          <select value={this.state.value}
                  onChange={e => this.doChange(e)}>
            {options}
          </select><br />
          <input type='submit' />
        </form>
      </div>
    )
  }

  // 선택 박스를 변경했을 때
  doChange (e) {
    this.setState({value: e.target.value})
  }

  // 입력 양식을 전송했을 때
  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }

} // end of SelectForm class
