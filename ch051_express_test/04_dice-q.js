const express = require('express')
const app = express()
const portNo = 3000

// 루트에 접근할 때
// URL 매개변수 형태로 변견한 예제
app.get('/', (req, res) => {
  if(!req.query.q) {
    console.log(`!req.query.q : ${req.query.q}`)
    res.send(
      '<p><a href="?q=6">6면체 주사위</a><br />'+
      '<a href="?q=12">12면체 주사위</a></p>')
  } else {
    console.log(`req.query.q : ${req.query.q}`)
    const q = parseInt(req.query.q, 10) // 10진수의 정수로 변환
    console.log(`q : ${q}`)
    res.send(
      '주사위의 값은...' + dice(q)
    )
  }
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('서버 실행 완료 : ', `http://localhost:${portNo}`)
})