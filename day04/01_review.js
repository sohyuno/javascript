// console.log('연결확인')
// //'대모험',200 두 개의 값을 저장(객체)
// let book = {title:'대모험',page:200};
// console.log(book);

// //'대모험',200 두 개의 값을 저장(배열)
// let myBook = ['대모험',200]
// console.log(myBook);
// console.log(myBook[0])

// let books = [
//     {title:'대모험',price:200},
//     {title:'곰세마리',price:150},
//     {title:'홍길동전',price:500}
// ];
// console.log(books);
// console.log(books[0]['title']);
// console.log(book.title);
// console.log(books[0].title);
console.log('__________________함수____________________');
//안녕하세요출력,반갑습니다출력
console.log('안녕하세용');
// test함수
function test() {
    console.log('안녕하세요');
    console.log('반갑습니다~!');

}
test();
//안녕하세요,오소현,반갑습니다 출력
function hi(a,b,c){
    console.log(`안녕하세요 ${a}님`);
    console.log(`${a}님의 나이는 ${b}세 입니다`);
    console.log(`${a}님의 직장은 ${c}입니다`);
};
hi('오소현','27','경기도');
hi('배상엽','30','서울');

//함수 실행 결과를 값으로 받아오자
function f1(x){
 2 * x + 1;
}

f1(5);
console.log(f1);
//배열은 object타입 중 array타입
//함수도 객체 object 타입
//중에서도 function 타입



