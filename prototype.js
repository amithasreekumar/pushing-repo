//////////function constructor////////

// let X = function (j){
//     this.i= 0;
//     this.j=j;

//     this.getj= function(){
//         return this.j
//     }
// }
// let x2= new X(3);
// let x3= new X(9);
// console.log(x2.getj());
// console.log(x3);

/////////// using prototype////////

// let X = function (j){
//     this.i= 0;
//     this.j=j;

// }

// X.prototype.getj= function(){
//     return this.j
// } 

// let x2= new X(3);
// let x3= new X(9);
// console.log(x2.getj());
// console.log(x3);


// let House = function(color,furniture){
// this.color=color;
// this.furniture=furniture;
// }
// House.prototype.height=function(){
// console.log('3.00m')
// }

// let house = new House('red','sofa');
// let house2 = new House('blue','tpoy');

// console.log(house.height());
// console.log(house.color);
// console.log(house2.height());
// console.log(house2.color);

// class House { 
//     constructor (color,furniture){
//     this.color=color;
//     this.furniture=furniture;
//     }

//     getheight (){
//         return ('3.00m')
//     }
// }
//     let house = new House('red','sofa');
//     let house2 = new House('blue','tpoy');

//     console.log(house.getheight());
//     console.log(house.color);
//     console.log(house2.getheight());
//     console.log(house2.color);










////////////setPrototypeOf//////////

// let object1 = {
//     prop1: 'name',
//     prop2: 'job'
// };
// let object2 = {
//     prop3: 'address'
// };
// Object.setPrototypeOf(object2, object1);
// // console.log(object2.prop1);
// // Object.getPrototypeOf(object2).prop1();
// console.log(Object.getOwnPropertyNames(object1));
// console.log(Object.getOwnPropertyNames(object2));
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(object1)));
// console.log(object1.hasOwnProperty('prop1'))

