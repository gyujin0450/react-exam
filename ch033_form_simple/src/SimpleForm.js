import React from 'react'

export class SimpleForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  // 값이 변경됐을때
  doChange (e) {
    const newValue = e.target.value
    this.setState({ value: newValue })
  }

  // 전송 버튼을 눌렀을 때
  doSubmit (e) {
    window.alert('전송: ' + this.state.value)
    e.preventDefault()
  }

  // 화면 렌더링
  render () {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
      <form onSubmit={doSubmit}>
        <input type='text' value={this.state.value} onChange={doChange} />
        <input type='submit' value='전송' />
      </form>
    )
  }
}
