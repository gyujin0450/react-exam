import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 범용적인 입력 컴포넌트
export default class FormInput extends Component {
  // 상태 초기화
  constructor (props) {
    super(props)
    const v = this.props.value /* defaultProps 로 초기화 */
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }
  // 패턴에 맞는지 확인
  checkValue (s) {
    if (this.props.pattern === null) {
      return true
    }
    return this.props.pattern.test(s)
  }

  // 값이 사용자에 의해 변경됐을 때
  handleChange (e) {
    const v = e.target.value
    // 필터가 있다면 필터를 적용함
    const filter = this.props.filter
    let newValue = v
    if (filter !== null) {
      newValue = newValue.replace(filter, '')
    }

    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      isOK: newIsOK
    })

    // 이벤트를 실행
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK,
        name: this.props.name
      })
    }
  }

  // 프로퍼티가 변경됐을 때
  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }

  // 렌더링
  render () {
    const msg = this.renderStatusMessage()
    return (
      <div>
        <label>{this.props.label}: <br />
          <input type='text'
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
          {msg}
        </label>
      </div>
    )
  }

  //
  renderStatusMessage () {
    const so = {
      margin: '8px',
      padding: '8px',
      color: 'white'
    }
    let msg = null
    if (this.state.isOK) {
      // OK 일때
      so.backgroundColor = 'green'
      msg = <span style={so}>OK</span>
    } else {
      // NG일때(빈 문자열이라면 출력하지 않음)
      if (this.state.value !== '') {
        so.backgroundColor = 'red'
        msg = <span style={so}>NG</span>
      }
    }
    return msg
  }
} // end of FormInput class

// 프로퍼티의 자료형 정의
FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

// 프로퍼티의 초깃값을 정의
FormInput.defaultProps = {
  filter: null,
  pattern: null,
  value: '',
  placeholder: '',
  onChange: null
}
