const express = require('express')
const app = express()
const portNo = 3000

// 루트에 접근할 때
app.get('/', (req, res) => {
  res.send(
    '<p><a href="/dice/6">6면체 주사위</a><br/>' +
    '<a href="/dice/12">12면체 주사위</a></p>')
})

// 주사위 페이지에 접근할 때
// URL 경로를 지정할 때 정규식 표현식을 사용해 패턴을 인식 할 수 있음(p305)
app.get('/dice/:num', (req, res) => {
  res.send('주사위의 값은...' + dice(req.params.num))
})

function dice(n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})
