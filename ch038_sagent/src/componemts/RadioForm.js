import React, { Component } from 'react'

export class RadioForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: props.items,
      value: ''
    }
  }

  render () {
    // 라디오 버튼을 생성
    const radiolist = this.state.items.map(i => {
      return (
        <div>
          <label>
            <input type='radio' name='item' value={i}
              checked={this.state.value === i}
              onChange={e => this.doChange(e)}
            />{i}
          </label>
        </div>
      )
    })

    return (
      <div>
        <form onSubmit={e=> this.doSubmit(e)}>
          {radiolist}
          <input type='submit' />
        </form>
      </div>
    )
  }

  // 라디오버튼을 변경했을때
  doChange (e) {
    this.setState({ value: e.target.value })
  }

  // 입력 양식을 전송했을 때
  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
} // end of RadioForm class
