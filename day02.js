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
variable2 = '오소현';
console.log(variable2);
//재선언 불가능


