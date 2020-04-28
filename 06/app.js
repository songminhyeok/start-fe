var a = 'aaa';
let b = 'aa';
const c = "bb";
console.log(a,b,c);  



var str = 'aaaaaaa \
dsfdf';

const s = `aaaaaaaa
cccccvcvcvscs`

console.log(str,s);



function sum(x,y = 1) {
    return x + y; 
}

console.log(sum(1));



const arr = [1,2,3];
const newArr = arr.map(function(item){
    return item + 1;
});

console.log(newArr); 



const newArr = arr.map(item => item + 1); 
console.log(newArr); 
document.getElementById('box').addEventListener('click', event =>console.log(1));

