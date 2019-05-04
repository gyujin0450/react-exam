const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('서버 실행 완료 - http://localhost:3000')
})

// GET 메소드라면 입력 양식을 응답함
app.get('/', (req, res) => {
  res.send(
    '<form method="POST" action="/">'+
      '<textarea name="memo">테스트</textarea><br />'+
      '<input type="submit" value="전송"/>' +
    '</form>'
  )
})

// POST 메서드를 받음
app.post('/', (req, res) => {
  res.send('POST 되었습니다!!!')
})