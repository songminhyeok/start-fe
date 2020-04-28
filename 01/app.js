
console.log('app.js');



var name = '송민혁';
var Name = '송민혁';


console.log(name);
console.log(Name);



console.log(1);
console.log(2);





var count = 1;
console.log(count);


var isMan = true;  
var isMan = "true";

console.log(isMan);



function log(str) {
    console.log(str);
};


var log = function(str) {
    console.log(str);
};



var image = {
    width: 100,
    height: 100,
    name:'1.png'
};

var image1 = [1,2,3,4,5,6,'a',{}];
image1[0] = 'a';


var date = null;
var data1 = '';
var date2;

console.log(data, data1, data2);



var imageWidth = 100;
var imageHeight = 100;
console.log(image, image1);


console.log(1+2); //3
console.log('a' + 'b'); //ab
console.log(1+'4'); //14


var count = 1;
var number ='2';


console.log(count + number); // 12
console.log(1 == 1); // 동등, true
console.log(1 == 2); // fales
console.log('' == '0'); // fales
console.log(0 == '') // true, 값들이 자동으로 bool형변환이 되서 fales = fales

var isHero = true;
if (isHero && isHulk) {
    console.log('hero')
}

console.log(typeof(1)); // 어떤 타입인지 알려줌