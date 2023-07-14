let a = document.getElementById('intro');
console.log(a);

a.textContent = '안녕';

let b = document.querySelector('#intro');
console.log(b);

b.textContent = '짱아';
b.style.color = 'red';



let c = document.getElementsByClassName('em');

c[1].textContent = '안녕';

let d = document.querySelectorAll('.em');
console.log(d);

let e = document.getElementsByTagName('p');
console.log(e);

const buttonClick = ()=>{
    console.log('버튼클릭');
    //첫번째 p태그를 가져와서
    //글자 색상을 빨간색으로 변경
    let firstP = document.querySelector('p');
    firstP.style.color = 'blue';

}


const login = ()=>{
    let idInput = document.querySelector('#id');
    let idValue = idInput.value; //사용자가 입력한 값이 문자열로 들어있음
    console.log(idValue);
    //idValue가 ''이라면 id-err 를 display block으로 바꿔주기
    let errP = document.querySelector('#id-err');
    if(idValue === ''){
    errP.style.display = 'block';
    }else{
    errP.style.display = 'none';
    }

    //idValue가 ''이 아니라면 id-err를 display none으로 바꿔주기
}








