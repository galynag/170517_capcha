var massCapcha2=[
    {
        'key': '28ivw',
        'imgSSrc': ['capcha-1.jpg', 'capcha-2.jpg', 'capcha-3.jpg', 'capcha-4.jpg', 'capcha-5.jpg', 'capcha-6.jpg'],
    },
    {
        'key': 'k4ez',
        'imgSSrc': ['capcha-1.jpg', 'capcha-2.jpg', 'capcha-3.jpg', 'capcha-4.jpg', 'capcha-5.jpg', 'capcha-6.jpg'],
    },
    {
        'key': 'FH2DE',
        'imgSSrc': ['capcha-1.jpg', 'capcha-2.jpg', 'capcha-3.jpg', 'capcha-4.jpg', 'capcha-5.jpg', 'capcha-6.jpg'],
    },
    {
        'key': 'xmqKi',
        'imgSSrc': ['capcha-1.jpg', 'capcha-2.jpg', 'capcha-3.jpg', 'capcha-4.jpg', 'capcha-5.jpg', 'capcha-6.jpg'],
    },
    {
        'key': 'e5hb',
        'imgSSrc': ['capcha-1.jpg', 'capcha-2.jpg', 'capcha-3.jpg', 'capcha-4.jpg', 'capcha-5.jpg', 'capcha-6.jpg'],
    },
    {
        'key': 'xDHYN',
        'imgSSrc': ['capcha-1.jpg', 'capcha-2.jpg', 'capcha-3.jpg', 'capcha-4.jpg', 'capcha-5.jpg', 'capcha-6.jpg'],
    },
    {
        'counter': 0,
    },
];
var divCapcha2=document.querySelector('#capcha2');
var valueKeyCapcha2=document.querySelector('.capcha2-key');
var massageCapcha2 = document.querySelector('#capcha2-massage');

function imgCapcha2() {
    massCapcha.counter=getRandomInt(0, (massCapcha.length-1));
    //проверить на совпадение с текущей
    for (var i=0; i<massCapcha2[massCapcha2.counter].imgSrc.length; i++) {
        divCapcha2.style.background='url(images/'+massCapcha2[massCapcha2.counter].imgSrc+') no-repeat';
        divCapcha2.style.backgroundSize = 'contain';
    }
};
function checkCapcha2() {
    if (valueKeyCapcha2.value==massCapcha2[massCapcha2.counter].key){
        massageCapcha2.innerHTML='Спасибо, код введен верно!';
    } else { massageCapcha2.innerHTML='Код введен НЕверно попробуйте еще!';
        imgCapcha2();}
};
imgCapcha2();
document.querySelector('#button-capcha2').addEventListener('click',checkCapcha2);