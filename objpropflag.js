////////////////////DATA PROPERTY///////////////////////////


// let user = {
//     name: "John"
//   };

//   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
//   console.log(descriptor)

//   /* property descriptor:
//   {
//     "value": "John",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
//   */

// let user = {};
// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptor);

// let flag = {
//     name: 'manu',
//     id : 5,
// }
// Object.defineProperties(flag, {
//     name : {value:'manu'},
//     id : {value: 6, writable: true, enumerable: false,configurable: true}
// })
// let descriptor = Object.getOwnPropertyDescriptor(flag, 'name');
// let descriptor2 = Object.getOwnPropertyDescriptor(flag, 'id');
// console.log(descriptor);
// console.log(descriptor2);


// let company = {
//     name: 'google',
//     place: 'L.A',
// }
// Object.seal(company);
// company.name= 'zoha';
// company.value= '80 B$'
// console.log(company);
// console.log(Object.isSealed(company));

// Object.freeze(company);
// company.name= 'zoha';
// company.value= '80 B$';
// delete company.place;
// console.log(company);
// console.log(Object.isFrozen(company));

// Object.preventExtensions(company);
// company.name= 'zoho';
// company.value= '80 B$';
// // delete company.place;
// console.log(company);
// console.log(Object.isExtensible(company));


///////////////////ACCESSOR PROPERTY///////////////////////////


// let details = {
//     firstName: 'sruthi',
//     lastName: 'vibin',
//     get fullName (){
//         return this.firstName+ ' '+ this.lastName;
//     },
//     set fullName (value){
//         [this.firstName,this.lastName]=value.split(' ');
//     } 
// }
// console.log(details.fullName);
// // details.fullName='amitha sreekumar';
// // console.log(details.fullName);
// console.log(details.firstName);
// console.log(details.lastName);


// let form = {
//     fName: 'abhitha',
//     sName: 'jithin'
// };
// Object.defineProperty(form , 'fullName',{
//     get (){
//         return this.fName +' '+ this.sName;
//     },
//     set (value){
//         [this.fName,this.sName]=value.split(' ');
//     }
// })

// console.log(form.fullName);
// form.fullName='abhitha sreekumar';
// console.log(form.fullName);


