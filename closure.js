// function person() {
//     let name = 'Peter';
    
//     return function displayName() {
//       console.log(name);
//     };
     
//   }
//   let nam = person();
//   nam(); // prints 'Peter'




// function greeting(message) {
//   return function(name){
//        return message + ' ' + name;
//   }
// }
// let sayHi = greeting('Hi');
// console.log(sayHi('John')); // Hi John

// // console.log(greeting('hello')(' amitha'));




// function greeting() {
//   let message = 'Hi';
  
//   function sayHi() {
//       console.log(message);
//   }

//   return sayHi;
// }
// console.log(greeting()());


//   function addition (x){
//   return function addto (y){
//     return x + y;
//   }
// }
// let nw= addition(5); /* this 'nw' hold the execution of addition(),when execution of  
//                            addition() happens it will do nothing but returns the ref of 
//                            funtion 'addto'. inorder to do the addition we should call 'nw()'*/
// console.log(nw(5));
