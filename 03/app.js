var link = document.querySelector('#link');
link.addEventListener('click', function (){
    console.log(1111111);
    // event.stopPropagation();
    event.preventDefault();
});


// var list = document.querySelector('#list');
// console.log(list.children);


// var app = document.getElementById("list");

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//         console.log('li');
//     }
// });

// document.body.addEventListener('click', function () {
//     console.log('body');
// });

// // for(var i=0; i<list.children.length; i++){
// //     console.log(list.children[i]);
// //     list.children[i].addEventListener('click', function(){
// //         console.log(1);
// //     });
// // }



// // var clickCount = 0;
// // function popup(event){
// //     console.log(++clickCount);
// //     console.log(arguments, event ,event.type,event.currentTarget);
// // }


// // console.log(window.outerWidth);
// // console.log(window.name);
// // // window.open('http://www.daum.net');

// // // var debug = document.getElementById('debug');
// // // console.log(debug); 

// // // var box= document.querySelector('#debug');
// // // console.log(box);

// // // var box= document.querySelector('.box');
// // // var box2= document.querySelectorAll('.box');
// // // console.log(box2);

// // // var div =document.createElement('div');
// // // // console.log(div);
// // // div.style.border = '1px solid #000';
// // // div.innerHTML = 'Hello!';

// // // const span = document.createElement('span');
// // // const textNode = document.createTextNode('hello!'); 
// // // span.appendChild(textNode);
// // // document.querySelector('#debug').appendChild(span);

// // // // document.body.appendChild(div);

// // var debug= document.getElementById('debug');
// // // debug.remove();

// // const list = document.getElementById('list'); 
// // list.removeChild(list.children[0]);