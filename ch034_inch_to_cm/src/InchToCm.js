import React, {Component} from 'react'
import ValueInput from './ValueInput'

// inch와 cm 뱐환 컴포넌트
export default class InchToCm extends Component {
  constructor (props) {
    super(props)
    // ValueInput 에 출력할 값을 상태로 저장함
    this.state = {
      inch: 0,
      cm: 0
    }
  }

  // inch가 변경됐을때
  inchChanged (e) {
    const inchValue = e.value
    const cmValue = inchValue * 2.54
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }

  // cm가 변경됐을 때
  cmChanged (e) {
    const cmValue = e.value
    const inchValue = cmValue / 2.54
    this.setState({
      inch: inchValue,
      cm: cmValue
    })
  }

  // 화면 렌더링
  render () {
    return (
      <div>
        <ValueInput title='inch'
          onChange={e => this.inchChanged(e)}
          value={this.state.inch} />
        <ValueInput title='cm'
          onChange={e => this.cmChanged(e)}
          value={this.state.cm} />
      </div>
    )
  }
}
