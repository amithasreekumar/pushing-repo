/////////*Write a program to separate each digit from number using predefined methods?*/////////

// let num = 69864;
// let sepnum = num.toString().split('');
// let nwnum = sepnum.map(Number);
// console.log(sepnum);
// console.log(nwnum);



///////////Write a program to check whether a number is prime or not?////////
/* A prime number is a positive integer that is only divisible by 1 and itself.
(all other no are composit number which are divisible by more than 2 num eg 1 and itself)
For example, 2, 3, 5, 7, 11 are the first few prime numbers. ['1' is neighter a prime and composit]*/


// let prmNm = 282589;
// let isprime = true;
// if(prmNm<=1){
// console.log('this is not a prime number')
// }else{
//     for ( let factor= 2; factor<prmNm;factor++){
//        if(prmNm % factor === 0){
//         isprime=false;
//         break
//        }
//     }if(isprime){
//         console.log( ` ${prmNm} is a prime number`)
//     }
//     else{
//         console.log( ` ${prmNm} is a composit number`)
//        }
// }



///////Write a program to calculate the area of triangle? When sides are given?Using the herons formula?//////
//asume a=5,b=5,c=5 as length of three sides.herons formula is=> semi-perimeter p =(a+b+c)/2, area = sqrt(p(p-a)(p-b)(p-c));

// let a = 5;
// let b= 5;
// let c= 5;
// let sp = (a+b+c)/2;
// let area= Math.sqrt (sp *(sp-a)*(sp-b)*(sp-c));
// console.log(area);
// console.log(sp);



//////////write a javascript program to check whether a number is armstrong or not  /////////////

// const amstrNm= 153;
// let sum=0;

// let temp =amstrNm

// while(temp >0){
//  let  remider = temp%10;
//  sum += remider*remider*remider
//  temp= parseInt(temp/10);
// }
// if(sum===amstrNm) {
// console.log(`${amstrNm} is a amstrong number`)
// }else{
//     console.log(`${amstrNm} is a not amstrong number`)
// }




////////////Write a program to check number is a strong number or not?///////////
/*A strong number is a number if the factorial of its digit is equal to the number itself.
Eg: 145 is a strong number. Factorial of 145 is 1! + 4! + 5! = 1 + 24 + 120 = 145*/














//////////Swap two numbers without using a temp variable////////////
//  there are many methods to swap like destructuring,Temporary variable,Addition and difference, Bitwise XOR operator
////////here we are not using Temporary variable////////

// let a = 1;
// let b=2;

// [a,b] = [b,a]  ///////destructuring
// console.log(a);//2
// console.log(b);//1

//  a = a+b;///////////Addition and difference
//  b= a-b;
//  a=a-b;
//  console.log(a);
//  console.log(b);

// let temp = a;//////Temporary variable
// a= b;
// b= temp;
//  console.log(a);
//  console.log(b);


//////Write a program that adds each digit of a number?(do not use predefined method)//////////

// let add = 68768;
// let total = 0;
// while (add != 0){
//     total= total+ add%10;
//     add=Math.floor(add/10);
// }
// console.log(total);

///////using predefined method
// let add= 54775;
// let numarr = add.toString().split('');

// let total = numarr.reduce(function(a,b) {
//     return parseInt (a)+parseInt (b)
// },0);
// console.log(total);


/////////////Write a program to print fibonacci series?/////////////////
/* The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
 After that, the next term is defined as the sum of the previous two terms.
 0, 1, 1, 2, 3, 5, 8, 13, 21, ...*/

// let numRange = 20;
// let n1 = 0;
// let n2 = 1;
// let nextTime = n1 + n2;
// console.log(n1);
// console.log(n2);
// while (nextTime <= numRange) {
//     console.log(nextTime)
//     n1 = n2
//     n2 = nextTime
//     nextTime = n1 + n2;
// }

/////////////Write a program that can perform arithmetic operations (calculator)?/////////////

// let operent = '/';
// let num1= 23;
// let num2= 56;

// if(operent=='+'){
//     console.log(num1+num2);
// }else if(operent=='-'){
//     console.log(num1-num2);
// }else if(operent=='*'){
//     console.log(num1*num2);
// }else {
//     console.log(num1/num2);
// }

//////////Write a program to check whether a string is palindrome or not?/////////
/*A string is a palindrome if it is read the same from forward or backward. 
For example, dad reads the same either from forward or backward.
 So the word dad is a palindrome. Similarly, madam is also a palindrome.*/

//  let str = 'dad';
//  let spl= str.split('');
//  let rev = spl.reverse().join('')
//  if (str===rev){
//      console.log(`${str} is a palindrome`);
//  }else{
//     console.log(`${str} is not a palindrome`);
//  }


///////////Write a program to replace characters with their character code in a  	string?
//'g' tells all matches, not just the first.What goes inside the // is the pattern.('i' tells to be case insensitive.)
// var myStr = 'this_is_a_test';
// var newStr = myStr.replace(/_/g, '+');

// console.log( newStr );


////////////////// Count Repeating Letters///////////////

// function numuniq (str){

// let nwstr= str.split('');
// let uniq=[];
// let count= 1;
// for(let i= 0; i< str.length;i++){
//     if(nwstr[i]===nwstr[i+1] ){
//         count++;
//     }else{
//         let value= `${count} ${nwstr[i]}`;
//         uniq= [...uniq,value]
//         count=1;
//     }
// }
// return uniq.join('');
// }
// console.log(numuniq('hello world'));

//////////////Write a program to reverse the string?(without using predefined method)

// function word(str){
//     let nwst= "";
//     for(let i= str.length-1; i>=0;i-- ){
//         nwst += str[i];
//     }
//     return nwst;
//     }
//     console.log(word('ammu'))

//////////predefined method

// let rev= 'amitha';
// let nwrev= rev.split('').reverse().join('');
// console.log(nwrev);


////////////Write a program to check whether the string contains vowels or not? 

// let vowels = ['a','e','i','o','u','A','E','I','O','U'];

// function findvow(sent){
// let count= '';
// for(let i=0 ;i<sent.length-1;i++){
//     if(vowels.includes(sent[i])){
//         count++
//     }
// }
// return console.log(count);
// }
// console.log(findvow('i am happy!'))

/////////Write a program to check whether the string contains any digit or not?//////////////
//test()	Tests for a match in a string. It returns true or false.
/*
\d	
Matches any digit (Arabic numeral). Equivalent to [0-9]. For example, /\d/ or /[0-9]/
 matches "2" in "B2 is the suite number".

\D	
Matches any character that is not a digit (Arabic numeral). Equivalent to [^0-9]. For example,
 /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".

\w	
Matches any alphanumeric character from the basic Latin alphabet, including the underscore.
 Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "$5.28", "3" in 
 "3D" and "m" in "Émanuel".

\W	
Matches any character that is not a word character from the basic Latin alphabet. 
Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%" and 
"É" in "Émanuel".
*/

// function hasNumber(myString) {
//     return /\W/.test(myString);
//   }
// console.log(hasNumber('12Wa@'));

///////////Write a program to search for a character in a string?//////////////

// function ischaracter(word){
//     return /\W/.test(word);
// }
// console.log(ischaracter('Ami*'));


///////find unique character in a string////////////////

// function isunique(word){
// let nwwrd = word;
// let unique=[];
// for(let i=0;i< word.length;i++){
//     if(unique.indexOf(nwwrd.charAt(i))==-1){
//         unique+= nwwrd[i]
//     } 
// }
// return unique
// }
// console.log(isunique('hi i am amitha'));

//////////Write a program to reverse each word in a sentence.///////////

// function rev(sentence) {
//     let arr = sentence.split(' ')
//     let revarr = arr.map(ele => {
//         return ele.split('').reverse().join(' ');
//     });
//     return revarr.join('  ');
// };
// console.log(rev('hello sam how are you'));

/////////////Write a program to calculate repetitions of a character in a string/////////

// function repetition(char) {
//     let arr = char.split('');
//     let count = 1;
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             count++
//         } else {
//             let value = `${arr[i]} ${count}`
//             res = [...res, value];
//             count = 1
//         }
//     }
//     return res
// }
// console.log(repetition('aaammmcccuukspspoa'));

///////////find largest no in an array/////////////
// let arr=[152,445,615,544,652,241,584,241,444,541];
// let largeno= Math.max(...arr);//spread operator
// console.log(largeno);












