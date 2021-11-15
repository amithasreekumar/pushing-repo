// const sayHello = function() { ////////Using a variable/////
//         return function() {
//        console.log("Hello!");
//     }
//  }
// const myFunc = sayHello();
//  myFunc();



//  const sayHello = function() {  ////////Using double parentheses///////
//     return function() {
//    console.log("Hello!");
// }
// }
//  sayHello()();

// function createQuote(quote, callback){ /////createQuote is the higher-order function///
//    var myQuote = "Like I always say, " + quote;
//    callback(myQuote); // 2
//  }
 
//  function logQuote(quote){
//    console.log(quote);
//  }
 
//  createQuote("eat your vegetables!", logQuote); // 1


// function serverRequest(query, callback){
//    setTimeout(function(){
//      var response = query + "full!";
//      callback(response);
//    },2000);
//  }
 
//  function getResults(results){
//    console.log("Response from the server: " + results);
//  }
 
//  serverRequest("The glass is half ", getResults);


function makeCounter() {
   let count = 0;
 
   return function() {
     
     return count++;
   };
 }
 
 let counter = makeCounter();
 console.log(counter())
  
 
 
