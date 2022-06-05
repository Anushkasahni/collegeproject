 //1.ways to print in javascript
   // console.log("HelloWorld");
    // alert("me")
    //document.write("this is document write")

  //2.javascript console API
// console.log("Hello World");
// console.warn("this is warning");
// console.error("This is an error");
    
//3.JavaScript Variables
//what are Variable? - Containers to store data values

/*
multi
line 
comment
*/
var number1 = 34;
var number2 = 56;

// console.log(number1 + number2);

//4. Data type in javascript
//Numbers
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This is a string";
var str2 = "This is a also string";
// console.log(str1);
//objects
var marks = {
    rani: 34,
    shubh: 78,
    ansh: 99.977
}
// console.log(marks);

//Boleans
var a = true;
var b = false;
// console.log(a, b);

//var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

var arr = [1, 2, "anushka", 4, 5]
// console.log(arr);

//operators in javascript
//Arithmetic operators
var a = 100;
var b = 10;
// console.log("The value of a+b is ", a + b);
// console.log("The value of a-b is ", a - b);
// console.log("The value of a*b is ", a * b);
// console.log("The value of a/b is ", a / b);

//Assignment Operators
var c = b;
//c += 2;
c -= 2; //c = c -2;
// c /=2;
//console.log(c);

//Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//Logical Operators

// logical or
// console.log(true || true)
// console.log(true || true)
// console.log(true || true)
// console.log(true || true)
// console.log(true || true)

// logical and
// console.log(true &&true)
// console.log(false && true)
// console.log(true && false)
// console.log(false && false)
// console.log(true && true)

// logical not
// console.log(! false);
// console.log(!true);

// Function in JavaScript
// DRY = Do not your repeat yourself
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
var age = 23;
// single if statement

// if (age > 18) {
//   console.log("You are alivigal");
// }

// if-else statement
// if (age > 18){
//   console.log("You are alivigal");
// }
// else {
//   console.log("You are not alivigal");
// }


// if-else Ladder
/*if (age > 32) {
  console.log("you are a not a boy");
}
else if (age > 26) {
  console.log("you are a not a kid");
}
else if (age > 22) {
  console.log("Yes is not a boy")
}
else if (age > 18) {
  console.log(" 18 you are a boy")
}
else {
  console.log("BAchhe rahe");
}
console.log("End of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
for (var i = 0; i < arr.length; i++){
  // console.log(arr[i])
}


arr.forEach(function(element){
  // console.log(element);
})
// const ac = 0;
// ac = ac + 1;
let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// do{
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length)
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr.unshift("Harry"))
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
//console.log(myLovelyString.lastIndexOf("good"))


// console.log(myLovelyString.slice(0,3))
d = myLovelyString.replace("Harry", "Subh");
// d = d.replace("good", "bad");
// console.log(d,myLovelyString)

myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());