// 1.Ways to print in javascript
// console.log("This is me.");
// alert("ME");
// document.write("this is document write");
// 2.Javascript console API
// console.log("This is me.");
// console.warn("This is warning");
// console.error("This is an error")


// 3.Javascript Variables
// containers to store data values

var number1 = 34;
var number2 = 56;
// console.log(number1+number2)

// 4.Data Type in Javascript
// number
var num1 = 19;
// // string
var str1 = "This is a string";
// // objects
var marks = {
    ravi: 34,
    shubham:78,
    harray:99
}

// console.log(marks);

//boolens
var a = true;
var b = false;
// console.log(a,b);

//array
var arr = [1,2,"str",4,5]
//function
function avg(a,b) {
    return (a+b)/2;
}

c = avg(4,6);
// console.log(c);
//if-else statement
var age = 33;
// if(age<45) {
//     console.log("You cant get vaccinated")
// }
// else {
//     console.log("You can get vaccinated")
// }

//loops
//var arr1 = [1,2,3,4,5,6,7]

// for(var i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

//OR

// arr.forEach(function(element){
//     console.log(element);
// })

//Array Methods
// let myarr = ["hello", 32 , 56 , 9.6 , true];
// myarr.pop();
// console.log(myarr)
// myarr.reverse();
// console.log(myarr)

// String Method in Javascript
let mystring = "Hi there";
// console.log(mystring.length)
// console.log(mystring.indexOf("there"))
// console.log(mystring.slice(3,8))
d = mystring.replace("Hi", "hello");
// console.log(d)

myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

//DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName('container')
// console.log(elemclass);
// elemclass[0].style.background = "yellow";
// console.log(elemclass.innerHTML)

tn  = document.getElementsByTagName('button');
// console.log(tn);

// //Selecting using query
sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked() {
//     console.log('The button was clicked');
// }

// window.onload = function() {
//     console.log('The document was loaded');
// }
// Events in Javascript
// firstcontainer.addEventListener('click',function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("clicked on container");
// })
// firstcontainer.addEventListener('mouseup',function() {
//     console.log("Mouse up when clicked on Container");
// })

// firstcontainer.addEventListener('mousedown',function() {
//     console.log("Mouse down when clicked on Container");
// })


//Arrow function

sum  = (a,b) => {
    return a+b;
}

//SetTimeout & Setinterval
// log_fun  = ()=> {
//     console.log("I am your log")
// }
// setTimeout(log_fun, 2000);
// setInterval(log_fun, 2000);

// clr = setInterval(log_fun, 2000);

// Javascript local storage
// localStorage.setItem('name','shweta');
// localStorage.setItem('surname','chavan');

// JSON
// obj  = {name: 'shweta', length: 1}
// // js = JSON.stringify(obj);
// // console.log(js);

// parsed = JSON.parse('{"name":"shweta","length":1}')
// console.log(parsed);

