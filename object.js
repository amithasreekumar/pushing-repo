
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
// 'building no': 3960,
// };


// console.log(person['building no']);
// delete person.firstName;
// console.log(person);
// console.log ('age' in person);


// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log(person['building no']);
// delete person.firstName;
// console.log(person);
// console.log('age' in person)


// let det ={
//     name : 'amitha',
//     age : 26,
//     job: 'none',
//     phnApp:[],
//     media: function(apps){
//        this.phnApp.push(apps);
//     },
//     total: function(){
//         return`amitha is using ${this.phnApp.length} apps daily for min 1hr`
//     },
//     info: function(){
//         return`hi ${this.name} ${ this.age} ${this.job} ${this.phnApp}`
//     }

// }
// det.media('watsapp');
// det.media('insta');
// // console.log(det.phnApp);
// // console.log(det.total());
// console.log(det.info());\


// let Foo = function(name,id,designation){
//     this.name= name,
//     this.id= id,
//     this.designation= designation

// }
                   
// let emp2 = new Foo('abhitha','2','clerk');
// console.log(emp2);
// let emp3 = new Foo('anju','15','asst mngr');
// console.log(emp3);
// let emp4 = new Foo('aparnna','24','designer');
// console.log(emp4);
// let emp1 =  Foo('amitha','21','manager');// calling the constructor function in a normal way with out new keyword
// console.log(emp1);                       //undefined


// function det(name,id,designation){
//     var nw= {};
//     nw.name=name;
//     nw.id=id;
//     nw.designation=designation;
//     return nw
// }

// console.log(det('kannan','6','ca'));
// console.log(det('manu','1','engineer'));
// let other =new det('abi','54','doctor');// calling the function in as constructor function(insted of normal way)
// console.log(other);                       //it will work but not a good practice