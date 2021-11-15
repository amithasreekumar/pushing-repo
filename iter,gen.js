// const arr = ['h', 'e', 'l', 'l', 'o'];

// let arrIterator = arr[Symbol.iterator]();
// console.log(arrIterator); 
// console.log(arrIterator.next()); // {value: "h", done: false}
// console.log(arrIterator.next()); // {value: "e", done: false}
// console.log(arrIterator.next()); // {value: "l", done: false}
// console.log(arrIterator.next()); // {value: "l", done: false}
// console.log(arrIterator.next()); // {value: "o", done: false}
// console.log(arrIterator.next()); // {value: undefined, done: true}







function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
let gen = generate(); 
console.log(gen);           //Object [Generator] {}
let result = gen.next();
console.log(result);        //invoked 1st time     { value: 1, done: false }
result = gen.next();
console.log(result);        //invoked 2nd time     { value: 2, done: false }
result = gen.next();
console.log(result);        // { value: undefined, done: true }