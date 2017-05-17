var massCapcha=[
    {
        'key': '28ivw',
        'imgSrc': 'capcha-1.jpg',
    },
    {
        'key': 'k4ez',
        'imgSrc': 'capcha-2.jpg',
    },
    {
        'key': 'FH2DE',
        'imgSrc': 'capcha-3.jpg',
    },
    {
        'key': 'xmqKi',
        'imgSrc': 'capcha-4.jpg',
    },
    {
        'key': 'e5hb',
        'imgSrc': 'capcha-5.jpg',
    },
    {
        'key': 'xDHYN',
        'imgSrc': 'capcha-6.jpg',
    },
    {
        'counter': 0,
    },
];


var divCapcha=document.querySelector('#capcha');
var valueKeyCapcha=document.querySelector('.capcha-key');
var massageCapcha = document.querySelector('#capcha-massage');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function imgCapcha() {
    massCapcha.counter=getRandomInt(0, (massCapcha.length-1));
    //проверить на совпадение с текущей
    divCapcha.style.background='url(images/'+massCapcha[massCapcha.counter].imgSrc+') no-repeat';
    divCapcha.style.backgroundSize = 'contain';
};
 function checkCapcha() {
    if (valueKeyCapcha.value==massCapcha[massCapcha.counter].key){
        massageCapcha.innerHTML='Спасибо, код введен верно!';
   } else { massageCapcha.innerHTML='Код введен НЕверно попробуйте еще!';
            imgCapcha();}
 };
imgCapcha();
document.querySelector('#button-capcha').addEventListener('click',checkCapcha);
