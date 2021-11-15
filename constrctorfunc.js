// /////////// constructor function////////////
// function Obj() {
//     this.name = 'amitha',//'this' refers to the object when the object is created. 
//         this.age = '26';
//         this.func= function(){
//             console.log(this.name+ ' '+ 'is'+ ' '+ this.age+ ' year old')
//         }
// }
// let nwObj = new Obj();//Create Object 'nwObj' with Constructor Function 'Obj'
// // console.log(nwObj);
// console.log(nwObj.name);//// access properties
// console.log(nwObj.func());


// ///////////// constructor function with parameter//////////////
// function Obj2(name, age) {
//     this.name = name,//'this' refers to the object when the object is created. 
//         this.age = age;
// }
// let nwObj2 = new Obj2('manu', '29');//Create Object 'nwObj' with Constructor Function 'Obj'
// // console.log(nwObj2);
// console.log(nwObj2.name);//// access properties
// console.log(nwObj2.age);

// let nwObj3 = new Obj2('amma', '52');
// console.log(nwObj3.name);

// ////// adding new property to nwObj3////
// nwObj3.height = '5.7ft';
// console.log(nwObj3.height);

// ///////adding method to person1 object////
// nwObj3.greet = function () {
//     console.log('hello');
// }
// nwObj3.greet();


// //////////////////creating objects using object literal///////
// ////Object Literal is generally used to create a single object//

// let person = {
//     name: 'Sam'
// }

let Cartoon = function(name, character) {
    this.name = name;
    this.character = character;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.character);
    }
};

let tom = new Cartoon('Tom', 'Cat');
let jerry = new Cartoon('Jerry', 'Mouse');
console.log(tom.log())
































