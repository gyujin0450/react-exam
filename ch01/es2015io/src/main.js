// "calstest.js" 모듈을 읽어 들임
import { add, mul } from './calctest'
// import { gobsem as gob } from './gobsem'
import { gobsem } from './gobsem'

// 읽어 들인 함수 사용
console.log(add(2, 3))
console.log(mul(2, 3))

// gobsem의 별칭인 gob 함수 사용
// TypeError: (0 , _gobsem.gobsem) is not a function
// const v = gob(2, 3)
// console.log(`v ==> ${v}`)
console.log(gobsem(2, 3))
