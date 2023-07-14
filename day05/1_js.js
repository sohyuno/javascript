console.log('익명함수_______________');

//전통적인 방식의 함수
function printName(a){
    console.log('안녕하세요');
    console.log(a);

    console.log('반갑습니다');

};
printName('오소현');

//이름없는 함수 (익명함수)

(function(a){
    console.log('안녕하세용');
    console.log(a);
    console.log('반가와요');
})('오소현');

//이름없는 함수는 변수에 저장해놓고 사용
let tmp = function(a){
    console.log('하이하위');
    console.log(a);
    console.log('방가..~');
};
//화살표 표현식을 통한 익명함수
((a,b) =>{
    console.log(a);
    console.log(b);
    console.log('반가워용~!');
})('오오','소현');

let tmp2 = (a) => {
    console.log('오소현은');
    console.log(a);
}
tmp2('짱');

let tmp3 = a => console.log(a,'님 안녕하세요');
tmp3(`소현`);

let tmp4 = (a,b) => a+b;
console.log(tmp4(50,90));

//객체 속에 함수
//150값과 '에어컨'값과 함수를 저장하겠다
let person = {
  age:150,
  title:"에어컨",
  f:()=> console.log('안녕하세요')
  
};
console.log(person.age);
person.f();

//책 제목, 가격, 저자
function Book(a,b,c){
    this.price = a;
    this.title = b;
    this.author= c;
    
}
let b1 = new Book(100,'짱아의하루','오소현');
console.log(b1);
console.log(typeof b1);