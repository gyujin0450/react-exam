// 3.2.1 예제

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import './index.css'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

// 3.2.2 예제
// import React from 'react'
// import ReactDOM from 'react-dom'
// import NumberForm from './NumberForm'

// const st = { textAlign: 'center' }
// ReactDOM.render(
//   <div style={st}>
//     <NumberForm />
//   </div>,
//   document.getElementById('root')
// )

// 3.2.3 예제
import React from 'react'
import ReactDOM from 'react-dom'
import MultiForm from './MultiForm'

const st = {
  textAlign: 'left',
  padding: '10px'
}

ReactDOM.render(
  <div style={st}>
    <MultiForm />
  </div>,
  document.getElementById('root')
)
