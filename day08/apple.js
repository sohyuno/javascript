let cnt = 0;
const items = document.querySelectorAll('.card');

const rightBtn = () =>{

    
    cnt = cnt + 1;
    const cardCon = document.querySelector('.card-container');
    const items = document.querySelectorAll('.card');

    // const conWrap = document.querySelector('.container-wrap');
    
    // cardCon.style.tranform = `translateX(-${cnt*items.offsetWidth}px)`;
    // cardCon.style.transform = `translateX(-${cnt*items.offsetWidth}px)`;
       cardCon.style.transform = `translateX(-${cnt*490}px)`;
//   console.log('안녕');
};
const leftBtn = () =>{

    cnt = cnt - 1;
    const cardCon = document.querySelector('.card-container');
    const items = document.querySelectorAll('.card');

    // const conWrap = document.querySelector('.container-wrap');
    
    // cardCon.style.tranform = `translateX(-${cnt*items.offsetWidth}px)`;
    // cardCon.style.transform = `translateX(-${cnt*items.offsetWidth}px)`;
       cardCon.style.transform = `translateX(-${cnt*490}px)`;
//   console.log('안녕');
};

 
