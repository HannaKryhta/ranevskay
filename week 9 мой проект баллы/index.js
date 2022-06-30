const image=document.querySelector('#myImage');
const text=document.querySelector('h2');
const buttonOne=document.querySelector('#one');
const buttonTwo=document.querySelector('#two');
const buttonThree=document.querySelector('#three');
const buttonFour=document.querySelector('#four');

buttonOne.addEventListener('click', gosha);
buttonTwo.addEventListener('click', vladimir);
buttonThree.addEventListener('click', rudic);
buttonFour.addEventListener('click', willBeLeftAlone);

function gosha(){
    
    image.setAttribute('src','https://media.informpskov.ru/content/2021/03/7NXpS1617216859.jpg');
    text.innerHTML='Они будут счастливы?';
    buttonOne.innerHTML='Да';
    buttonTwo.innerHTML='Нет';
    buttonThree.style='display:none';
    buttonFour.style='display:none';

    buttonOne.removeEventListener('click', gosha);
    buttonTwo.removeEventListener('click', vladimir);

    buttonOne.addEventListener('click', happy);
    buttonTwo.addEventListener('click', misfortune);
}

function happy(){
   
    image.setAttribute('src','https://s14.stc.yc.kpcdn.net/share/i/12/9974509/wr-750.webp');
    text.innerHTML='Счастье продлится, увы, недолго. Катя постарается подчиняться и быть слабее, но устанет от этой игры';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function misfortune(){
    
    image.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3OexY3Mm0vkrNK9As6jjvAatfWK4Za4cNMH3n6P-rIN2tRBzWn_1hR2RO38aP9Pyobg&usqp=CAU');
    text.innerHTML='Гоша будет переживать, что жена его добилась больших высот и начнет пить';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function vladimir(){
    
    image.setAttribute('src','https://avatars.mds.yandex.net/get-zen_doc/1350031/pub_5cab7b94643d2800af133102_5cab7d04dbcc0400ae97f918/scale_1200');
    text.innerHTML='Владимир разведется с женой?';
    buttonOne.innerHTML='Да';
    buttonTwo.innerHTML='Нет';
    buttonThree.style='display:none';
    buttonFour.style='display:none';

    buttonOne.removeEventListener('click', gosha);
    buttonTwo.removeEventListener('click', vladimir);
   
    buttonOne.addEventListener('click', yes);
    buttonTwo.addEventListener('click', no);
}

function yes(){
    
    image.setAttribute('src','https://avatars.mds.yandex.net/get-zen_doc/2431229/pub_5fce4b37c9e0347434cc0a5b_5fcf08cdc9e034743487e261/scale_1200');
    text.innerHTML='Будут они вместе?';
    buttonOne.innerHTML='Да';
    buttonTwo.innerHTML='Нет';
    buttonThree.style='display:none';
    buttonFour.style='display:none';

    buttonOne.removeEventListener('click', yes);
    buttonTwo.removeEventListener('click', no);
    buttonTwo.removeEventListener('click', vladimir);

    buttonOne.addEventListener('click', together);
    buttonTwo.addEventListener('click', apart);

}

function no(){
   
    image.setAttribute('src','https://tvbesedka.com/upload/2017/4/1/12/41/52/32a858ba-9605-4231-937a-1a22cb776c34.jpg');
    text.innerHTML='Катя не захочет оставаться в качестве любовницы и уйдет';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function together(){
    
    image.setAttribute('src','https://comp-pro.ru/wp-content/uploads/6/e/9/6e984d1abca3481e69c93c50e45fd959.jpeg');
    text.innerHTML='Будут вместе до первой измены Владимира';
   
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
 
}

function apart(){
    
    image.setAttribute('src','https://thumbs.dfs.ivi.ru/storage8/contents/e/6/eec118a0a041203307234e475cec7f.jpg');
    text.innerHTML='Катя его бросит, так как он трус и слабак';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}


function rudic(){
    
    image.setAttribute('src','https://image1.thematicnews.com/uploads/topics/preview/00/18/27/01/d8d86a8cb1.jpg');
    text.innerHTML='Они поженятся?';
    buttonOne.innerHTML='Да';
    buttonTwo.innerHTML='Нет';
    
    buttonThree.style='display:none';
    buttonFour.style='display:none';

    buttonOne.removeEventListener('click', gosha);
    buttonTwo.removeEventListener('click', vladimir);

    buttonOne.addEventListener('click', married);
    buttonTwo.addEventListener('click', notMarried);
}

function married(){
    
    image.setAttribute('src','https://s4.cdn.teleprogramma.pro/wp-content/uploads/2019/02/3b941d5d59796663ffee113cbf2284a3.jpg');
    text.innerHTML='В этом браке счастлив будет только Родя, найдя замену своей властной матери';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function notMarried(){
  
    image.setAttribute('src','https://avatars.mds.yandex.net/get-zen_doc/1601070/pub_5e5e59562ec4121573535bca_5e5e5c07f9358e4f31db4398/scale_1200');
    text.innerHTML='Катя не сможет  простить его предательства';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function willBeLeftAlone(){
    
    image.setAttribute('src','https://img-fotki.yandex.ru/get/6405/12959330.119/0_187932_f8a5ec53_orig');
    text.innerHTML='Найдет ли она счастье?';
    buttonOne.innerHTML='Да';
    buttonTwo.innerHTML='Нет';
    buttonThree.style='display:none';
    buttonFour.style='display:none';

    buttonOne.removeEventListener('click', gosha);
    buttonTwo.removeEventListener('click', vladimir);

    buttonOne.addEventListener('click', willFind);
    buttonTwo.addEventListener('click', unhappy);
}

function willFind(){
    
    image.setAttribute('src','https://www.syl.ru/misc/i/ni/2/4/5/3/4/0/4/i/2453404.jpg');
    text.innerHTML='Найдет мужчину, подходящего ей по статусу и характеру!';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}

function unhappy(){
    
    image.setAttribute('src','https://cs9.pikabu.ru/post_img/big/2017/02/12/8/1486903310155746449.jpg');
    text.innerHTML='Одинокая, но счастливая! Есть работа, дочь!';
    buttonOne.style='display:none';
    buttonTwo.style='display:none';
}