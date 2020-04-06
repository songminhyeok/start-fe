console.log('app');

/*
// Create
var todos = ['운동'];
var todo ='게임';
todos.push(todo);
console.log(todos);

//read

todos.forEach(function(todo) {

    console.log(todo);
});
/*
// update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);
*/

/*var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);
*/

/*var isMan = true;
if(isMan) {
    console.log('1');
} 
else if(!isMan && isHero){
     
}
else{
    console.log('2');
}
*/

//window.alert('1');
//alert('안녕하세요');

//var who = prompt('당신은 누구세요?:');
//console.log(who);

//var isDelete = confirm('정말 삭제하시겠습니까?');

//console.log(isDelete);

/////////배열 count 요소들의 평균값 구하는 코드를 작성하세요/////
/*
function average(array) {
    var sum = 0.0;
  
    for (var i = 0; i < array.length; i++)
      sum += array[i];
  
    return sum / array.length;

}

var count = [10,20,30,40,50,60,70,100]; 
console.log("배열의 평균값 : " + average(count))

*/


/////////////구구단을 출력하는 코드를 for구문을 사용하여 작성하세요 ////
///구구단코드를 함수로 작성하세요 /////

/*

function gugudan(i){
for(var i =a; i<10; i++) {
    for(var j = 1; j < 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
         }
    }
}

var a = 2;
console.log(gugudan(a));
*/


////////메소드가 포함된 객체를 생성하세요 ////
/*
function sum(a, b) {
    return a + b;
  }
  sum(1, 3);
*/

var result = 0;
var i = 1;
while (true) {
    var value = window.prompt("더할 숫자를 입력해주세요!" + " ");
    if (value == null) {
        alert("숫자의 총 합은:" + result);
        break;
    }

    result += parseInt(value);
    
}