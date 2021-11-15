// let str = 'let-me-alone';
// let nwstr = str.split('-').map((ele,index)=> index===0 ? ele : ele[0].toUpperCase()+ ele.slice(1)).join()
// console.log(nwstr)

// let arr =[2,13, 1,5,6,8,3,7];
// let filtered = arr.filter((num)=> 
//  num >1 && num <4);
// console.log(filtered);

// let arr = [5, 2, 1, -10, 8];
// let dec= arr.sort((a,b)=> b-a);
// console.log()

// let lastElement = function(arr){
//     if (arr.length < 1){
//         return null;
//     }else{
//         let a= arr.length-1;
//         return a;
//     }
// };
// lastElement(2)

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
//   let sort = users.sort((a,b)=> a.name - b.surname);
//   console.log(sort);


////////////////////Storing functions in variables////////////
// function add(a, b) {
//   return a + b;
// }

// let sum = add;
// console.log(sum(10,6));

////////////////////Passing a function to another function///////////////
// function average(a, b, fn) {
//   return fn(a,b)/2 ;
// }

// let result = average(10, 20, sum);

// console.log(result);

/////////////// Ability to pass a function as arguments:///////////
// function teacher(){
//   return "Teacher";
// }
// function greet(user){
//    console.log("Welcome", user());    
// }

// // Prints "Welcome Teacher"
// var message = greet(teacher);

// var greet = function(){
//   return function(){
//   console.log("Welcome to GeeksforGeeks!");
//   }
// }
// greet()();
// (function(a,b){
//   return a + b;
// })(10,20);


// let capitalize = function(string) {
//   let cap= string.split('-').map((ele)=> ele[0].toUpperCase()+ ele.slice(1)).join(' ');
  
//   return cap;
//  };
 
//   console.log(capitalize('amitha'));


/*wright a function called sumarray which accept a single argument : an array of number .
  it should return the sum of all the numbers in the array */

// let sumArray  = function(array){
//   let sum = 0;
//     for(let i=0;i<array.length;i++){
//         sum += array[i];
//     }
//     console.log(sum);
// }
// sumArray([1,2,3,5,6]);




 /* Please write a function called lastElement which accepts a single array argument.  The function should return the
  last element of the array (without removing the element).  If the array is empty, the function should return null.*/
  let array;

  function lastElement (array) { 
     
     return array.length ? array[array.length - 1] : null;
  }
  console.log(lastElement([1,5,9]));