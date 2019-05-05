import React from 'react'
// https://stackoverflow.com/questions/43159975/cannot-read-property-location-of-undefined
import { Route, BrowserRouter as Router } from 'react-router-dom'

// 리엑트 라우터를 사용해 메인 컴포넌트 정의
// 모든 페이지에 완전히 같은 헤더와 푸터를 출력하도록 함
const HelloApp = () => (
  <Router>
    <div style={{margin: 20}}>
      <Header />
      <Route exact path='/' component={HelloKorean}/>
      <Route path='/ko' component={HelloKorean}/>
      <Route path='/ja' component={HelloJapanese}/>
      <Route path='/en' component={HelloEnglish}/>
      <Footer />
    </div>
  </Router>
)

// 고정 헤더 정의
const Header = () => (
  <div>
    <h3 style={styleHeader}>Helle App v2.0</h3>
    <p>
      [<a href='/ko'>한국어</a>]
      [<a href='/ja'>日本</a>]
      [<a href='/en'>English</a>]
    </p>
  </div>
)

// 고정 푸터 정의
const Footer = () => (
  <div style={styleHeader}>
    다양한 언어로 출력하는 어플리케이션...
  </div>
)

// 한국어 출력 컴포넌트 정의
const HelloKorean = () => (
  <div>
    <h1>안녕하세요..</h1>
  </div>
)


// 일본어 출력 컴포넌트 정의
const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
  </div>
)

// 영어 출력 컴포넌트 정의
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
  </div>
)

// 스타일 정의
const styleHeader = {
  backgroundColor: 'orange',
  color: 'white',
  padding: 8
}

export default HelloApp