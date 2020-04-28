console.log('app');

// create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo){
    console.log()
});

// Update 
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// Delete 1
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

// if
var isMan = false;
if(isMan) {
    console.log('1');
} 
else if(!isMan && isHero){

}
else {
    console.log('2');
}

alert('안녕하세요');
var who = propmpt('당신은 누구세요?');
console.log(who);

var isDelete = confirm('정말 삭제하시겠습니까?'); 
conlose.log(isDelete);


parseInt('12'); 

var id = setTimeout(test, 1000); 
var id = setInterval(test, 1000); 

var nick = 'aji'; 

function test() {
  var age = 30; 
  console.log(nick, age);
}

test();
console.log(age); 

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

var car = {
  year: '2014',
  starting: function() {
    console.log('starting..');
  },
};

car.starting();

(function() {
    var a = 'a';
    console.log
})(); 

function sum(x, y) {
  if (!y) y = 1;
  console.log(x + y);
}
console.log(sum(3)); 


