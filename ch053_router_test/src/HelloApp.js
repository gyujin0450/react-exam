import React from 'react'
// https://stackoverflow.com/questions/43159975/cannot-read-property-location-of-undefined
import { Route, BrowserRouter as Router } from 'react-router-dom'

// 리엑트 라우터를 사용해 메인 컴포넌트 정의
const HelloApp = () => (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path='/' component={Home}/>
      <Route path='/ko' component={HelloKorean}/>
      <Route path='/ja' component={HelloJapanese}/>
      <Route path='/en' component={HelloEnglish}/>
    </div>
  </Router>
)

// 홈화면 출력 컴포넌트 정의
const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>언어를 선택하세요</p>
    <ul>
      <li><a href='/ko'>한국어</a></li>
      <li><a href='/ja'>日本</a></li>
      <li><a href='/en'>English</a></li>
    </ul>
  </div>
)

// 한국어 출력 컴포넌트 정의
const HelloKorean = () => (
  <div>
    <h1>안녕하세요..</h1>
    <p><a href='/'>뒤로가기</a></p>
  </div>
)


// 일본어 출력 컴포넌트 정의
const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
    <p><a href='/'>戻る</a></p>
  </div>
)

// 영어 출력 컴포넌트 정의
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
    <p><a href='/'>Back</a></p>
  </div>
)

export default HelloApp