// var a = 1;
// // root scope oor globel scope
// function foo() {
//   // "foo" function scope
//    var a = 2;
//   console.log(a);
// }
// function bar() {
//   // "bar" function scope
//   a = 3;
//   console.log(a);
// }
// foo();//2
// bar();//3
// console.log(a);//3

//  when same variable is reassigned:Variable Shadowing

// let a = "hello";

// function greet() {
//     a = 3;
//     console.log(a);
// }
// // before the function call
// console.log(a);       //hello

// //after the function call
// greet();              //3
// console.log(a);       //3


//  when same variable is redeclared

// let num = 1;
// function fun(){
//   let num = 'a';
//   console.log(num);
// }
// console.log(num);       //1
// fun();                  //a
// console.log(num);       //1


//   // block scope
//   let message = 'Hello';
//   console.log(message); // 'Hello'
// }
// console.log(message);   // referror 


///////Scopes can be nested//////

// function run() {
//   // "run" function scope
//   const message = 'Run, Forrest, Run!';
// if (true) {
// 	// "if" code block scope
// 	const friend = 'Bubba';
// 	console.log(message); // 'Run, Forrest, Run!'
//   }
// console.log(friend); // throws ReferenceError
// }
// run();

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();
console.log(message);


