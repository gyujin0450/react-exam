// 익스프레스 실행
const express = require('express')
const app = express()

// multer 사용 준비
const multer = require('multer')
const path = require('path')

// 업로드 대상 디렉토리 지정
const tmpDir = path.join(__dirname, 'tmp')
const pubDir = path.join(__dirname, 'pub')
const uploader = multer({dest: tmpDir})

// 서버 실핼
app.listen(3000, () => {
  console.log(`서버 시작 - http://localhost:3000`)
})

// 업로드 입력 양식
app.get('/', (req, res) => {
  res.send(
    '<form  method="POST" action="/" enctype="multipart/form-data">'+
    '<input type="file" name="aFile" /><br />'+
    '<input type="submit" value="업로드"/><br />'+
    '</form>'
  )
})

// 정적 파일을 제공함
app.use('/pub', express.static(pubDir))

// 업로드를 받음
app.post('/', uploader.single('aFile'), (req,res) => {
  console.log('파일을 받습니다.')
  console.log('원본 파일 이름:', req.file.originalname)
  console.log('저장된 경로:', req.file.path)

  // MIME 으로 파일 형식을 확인
  if ( req.file.mimetype !== 'image/png') {
    res.send('PNG 이미지만 업로드할 수 있습니다...')
    return
  }

  // TODO : 진짜 PNG인지 확인해보기(p312)
  // 파일을 이동함
  // const fname = req.file.filename + '.png'
  // const des = pubDir + '/' + fname
  const fname = req.file.originalname  // TODO : 파일명 중복 해결필요
  const des = pubDir + '/' + fname
  const fs = require('fs')
  fs.rename(req.file.path, des, (err) => {
    if (err) throw err
    console.log('rename complete')
  })

  // HTML을 출력함
  res.send(
    '다음과 같은 파일이 업로드 됐습니다.<br />' +
    `<img src="/pub/${fname}" />`
  )
})

// https://github.com/expressjs/multer 에서 심화 학습 필요!!!
// https://opentutorials.org/course/2136/11959