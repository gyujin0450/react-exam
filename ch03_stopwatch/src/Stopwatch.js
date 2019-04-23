import React, { Component } from 'react'
import './Stopwatch.css'

// 컴포넌트 정의
class Stopwatch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLive: false,
      curTime: 0,
      startTime: 0
    }
    this.timeId = 0
  } // end of constructor

  // 마운트 했을 때
  componentWillMount () {
    this.timerId = setInterval(e => {
      this.tick()
    }, 1000)
  }

  // 언마운트 했을때
  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  // 매초 실행됨
  tick () {
    if (this.state.isLive) {
      const v = new Date().getTime()
      this.setState({ curTime: v })
    }
  }

  // 시작/중지 버튼을 클릭했을때
  clickHandler (e) {
    // 중지했을때
    if (this.state.isLive) {
      this.setState({ isLive: false })
      return
    }

    const v = new Date().getTime()
    this.setState({
      curTime: v,
      startTime: v,
      isLive: true
    })
  }

  // 촐력할 시계를 생성함
  getDisp () {
    const s = this.state
    const delta = s.curTime - s.startTime

    const t = Math.floor(delta / 1000)
    const ss = t % 60

    const m = Math.floor(t / 60)
    const mm = m % 60

    const hh = Math.floor(mm / 60)

    const z = (num) => {
      const s = '00' + String(num)
      return s.substr(s.length - 2, 2)
    }

    return <span className='disp'>
      {z(hh)}:{z(mm)}:{z(ss)}
    </span>
  }

  // 화면 랜더링
  render () {
    let label = 'START'
    if (this.state.isLive) {
      label = 'STOP'
    }
    const disp = this.getDisp()
    const fclick = (e) => this.clickHandler(e)
    return (<div className='Stopwatch'>
      <div>{disp}</div>
      <button onClick={fclick}>{label}</button>
    </div>)
  }
} // end of Stopwatch class

export default Stopwatch
