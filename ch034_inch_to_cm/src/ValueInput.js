import React, {Component} from 'react'

// 숫자 입력 컴포넌트
export default class ValueInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
    console.log('constructor : ', this.props.value)
  }

  // 값이 사용자에 의해 변경됐을 때
  handleChange (e) {
    console.log('handleChange : ', e.target.value)
    const v = e.target.value
    // 숫자 이외의 값을 제거함
    const newValue = v.replace(/[^0-9.]+/g, '')
    // 상태에 설절함
    this.setState({value: newValue})
    // 이벤트 실행
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue
      })
    }
  }

  // 프로퍼티가 변경 됐을때
  componentWillReceiveProps (nextProps) {
    console.log('nextProps.value => ', nextProps.value)
    this.setState({value: nextProps.value})
  }

  // 렌더링
  render () {
    return (
      <div><label>
        {this.props.title}: <br />
        <input type='text'
          value={this.state.value}
          onChange={e => this.handleChange(e)} />
      </label></div>
    )
  }
} // end of ValueInput
