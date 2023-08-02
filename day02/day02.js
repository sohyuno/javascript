console.log('연결됨')
// var를 통한 변수의 선언
var variable1;
//var을 통해 값을 선언만 했을 경우 기본적으로 변수 안에는 undefined가 들어가 있다
//대입연산자를 사용하여 값을 대입한다
//대입연산자는 방향성이 있기 때문에 오른쪽에서 왼쪽으로 해석한다
variable1 = 10;
variable1 = '오소현';
variable1 = undefined;
console.log('끝')
console.log(variable1)


//let을 통한 선언
//선언 후 최초로 대입한 값이 없다면 undefined가 출력됨
console.log('=============================')
let variable2;
variable2 = '오소현'; //값을 최초로 대입하는 행위 -> 초기화
console.log(variable2);
//재선언 불가능


//변수를 선언하면서 동시에 초기화를 해줘야 한다
const variable3 = '오소현최고야';
console.log(variable3);
// variable3 = 58;
// console.log(variable3); -> 재할당 불가능

console.log('==========연산자===========');
console.log('덧셈 연산자~~~~~~~!');
console.log('10 + 20 :', 10 + 20);
//str + str 
console.log('10'+'안녕');
// str + undefined
console.log(undefined + '얏홍');
// str + number -> str
console.log(10 + '안녕');
console.log(50 + '50');
//NaN -> num타입 
console.log(undefined + 80);
//여러가지 해보기
console.log(20 + 41 + '20' + 70 + 45);
console.log(10+''+27);

console.log('뺼셈 연산자~~~~~~~~~~~~~~~!');

console.log('안녕'-'안녕'); //NaN
console.log('10' - 2); //number 타입 결과 8
console.log(undefined - 1);

console.log('나눗셈 해볼까욘..~~~~~!?');
console.log(10 / 0); // Infinity

console.clear();

var 현재상태 = '움직임';

var 안녕 = function( { 
    if (현재 상태 !=){
        return false;
    }
    var text = $('div').text;
    text = parseInt(text);
    text++;
    $('div').text(text);
})
window.setInterval(안녕,1000);

$('div').dblclick(function() {
       현재상태 = '안움직임';
})