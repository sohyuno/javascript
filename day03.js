// console.log('잘 연결됨')

// console.log(true ? 10 : 100);
// console.log(false ? 10 : 100);

// console.log('---------prompt--------------')
// console.log(prompt('너의 이름은?','스즈메'));

// //사용자에게 아이디를 입력 받는다
// //반갑습니다 ***님 

// let id = prompt('아이디를 입력해주세요');
// console.log( `반값습니다. ${id}님의 포인트는 1,200점 입니다`);
// console.log(typeof id);


//prompt 함수 실행결과는 str 혹은 null
// let num1 = Number(prompt('숫자1입력>>'));
// let num2 = Number(prompt('숫자2입력 >>'));

// document.write(`두 수를 더한 결과는 ${Number(num1) + Number(num2)}입니다`);
// document.write(`<h1>두 수를 더한 결과는 ${num1 + 50}입니다`);

// //경고 메세지를 띄어주는 함수
// console.log('_________alert____________');
// alert('잘못된 접근입니다만?');

// //확인 메세지를 띄어주는 함수
// //확인을 클릭하면 true 취소는 false
// console.log('__________confirm_______');
// let check = confirm('그래도 정말 나가셔야겠습니까?');
// document.write(check);

console.log('___________객체___________');
//객체는 {}를 사용하여 만든다
let book1 = {
    title : '대모험',
    page:205,
    author:'오소현',
    publisher:'오또출판사',
    price:35500};
    book1.price = 20000;
console.log(book1.price);
console.log(book1['author']);

let bae10 = [10, 50, 
             80,100,
             2,5,
             '짱아','띵똥', '꿍','뽀또'
            ];
console.log(bae10);         
console.log(bae10[6]);   

        