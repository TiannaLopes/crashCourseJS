console.log("Hello");
//alert('yooooo');

// Varibles 
var b = "Smootie";
console.log(b);

var someNumber = 8374983;
console.log(someNumber);

document.getElementById('someText').innerHTML = 'This is so fun I love javascript';

//var age = prompt('What is your age?');
//document.getElementById('someText1').innerHTML = age;

//Numbers in Javascript 
var num1 = 5213;

//increment by one
num1 = num1+1; // or num1++; num1++;

//decrement by 1
num1-- ;
console.log(num1);
console.log(5 * 10);
console.log(5 / 10);

// divide, multiply and remainder
console.log(num1 % 5);
console.log(num1 / 5);
console.log(num1 * 5);

//icrement/ decrement by any number that you want 
num2 = 30;
num2 += 10;
num2 -= 10;
console.log(num2);

// functions 

function fun(){
    console.log('this is a function');
}
 fun();

// create a function that takes in a name and says Hello, followed by your name 

// function hIname(){
//     var str = prompt('What is your name?');
//     document.getElementById('nameFunction').innerHTML = `Hello, ${str}`;

// }
// hIname();
// // better way to do this?
// function greeting(name1){
//    var result = "Hello " + name1;
//    console.log(result);
// }
// var name = promt("what is your name?")
// greeting(fname);

// how do arguments work in functions????? --> get two numbers and add together in a function
function twoNums(num1, num2,){
const ans = num1 + num2;
console.log(ans);
}
twoNums(32,4);
twoNums("tel", "fjr");

// While loops vs for loops

var num = 0 ;
 while(num < 100){
     num += 1;
console.log(num)
    }

for(let num1 = 0; num1 < 100; num1++){
    console.log(num1);
}

//Data Types  
let yourAge = 21; // number
let yourName = "Bob" // string
let you = { firs: 'Tianna', last: "lopes"}; // object 
let isBirthday = true; //boolean
let groceries = ['apple', 'banana', ' orange']; //arrary 
let random; //undefined
let nothing = null; // null 

//Strings in Javascript 
let fruit = 'banana';
let morefruits = 'banana\napple'; // new line
console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));

//Arrarys
let fruits = ['banana', 'apple', 'mango', 'pinapple']
fruits = new Array ('banana', 'apple', 'mango', 'pinapple')

console.log(fruits[2]);
fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i <fruits.length; i++){
    console.log(fruits[i]);
}

console.log('to string', fruits.toString());
console.log(fruits.join(' * '))
console.log(fruits.pop(), fruits)
console.log(fruits.push('blackberries'), fruits) //appends 
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // same as push 
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi'); // add first element to array 
console.log(fruits);
let vegtables = ['lettuce', 'tomatos', 'carrots'];
let produce = fruits.concat(vegtables);
console.log(produce);
console.log(produce.slice(1,4));
console.log(produce.reverse());
let someNumbers = [5,4,5,6,2143,435,6543,34,54,5,2,6,21]
console.log(someNumbers.sort(function(a,b){return a-b})); //b-a would be sorted in desending order 

let emptyArray = new Array ()
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// objects 
let student = {first: 'Tianna', 
                last: "lopes", 
                age:21, 
                height: 163,
                studentInfo: function(){
                    return this.first + '\n' + this.last;
                }
            };
console.log(student.first);
console.log(student.last);
student.first='Nico'; // change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// If else and switch statements 
//var age = prompt('what is your age?');

// if ((age >= 18) && (age <= 35)){
//     status = 'target demographic';
//     console.log(status);
// }else {
//     status = 'not correct audience';
//     console.log(status);

// }


// switch statments 
// differenciate between weekday and weekend 

switch(6){
    case 0:
        text = 'weekend';
        break;
    case 5: 
        text = 'Weekend';
        break;
    case 6: 
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);