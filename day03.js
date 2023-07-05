console.log('잘 연결됨')

console.log(true ? 10 : 100);
console.log(false ? 10 : 100);

// console.log('---------prompt--------------')
// console.log(prompt('너의 이름은?','스즈메'));

// //사용자에게 아이디를 입력 받는다
// //반갑습니다 ***님 

// let id = prompt('아이디를 입력해주세요');
// console.log( `반값습니다. ${id}님의 포인트는 1,200점 입니다`);
// console.log(typeof id);


//prompt 함수 실행결과는 str 혹은 null
let num1 = Number(prompt('숫자1입력>>'));
let num2 = Number(prompt('숫자2입력 >>'));

document.write(`두 수를 더한 결과는 ${Number(num1) + Number(num2)}입니다`);
document.write(`두 수를 더한 결과는 ${num1 + 50}입니다`);
