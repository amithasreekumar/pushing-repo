let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

////////////exercise/////////////////

// console.log('person 1 shows the ticket');

// let preMovie= async()=>{
// const prms=  new Promise((resolve,reject)=>{
// setTimeout(()=>resolve('showen the ticket'),2000);
// });
// const popcone= new Promise((resolve,reject)=> resolve('bought the popcones'))
// const water= new Promise((resolve,reject)=> resolve('bought water'))

// let pro= await prms;
// console.log('hus: i got the ticket')
// let pop= await popcone;
// console.log('hus: i got the popcone')
// let wat= await water;
// console.log('hus: i got the water')
// return pro
// }
// preMovie().then((m)=> console.log(`person 2 have ${m}`))
// console.log('person 3 shows the ticket');
// console.log('person 4 shows the ticket');

// /*person 1 shows the ticket
//  person 3 shows the ticket
//  person 4 shows the ticket

//  hus: i got the ticket
//  hus: i got the popcone
//  hus: i got the water
//  person 2 have showen the ticket*/

//  let preMovie= async()=>{
//     const prms=  new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('showen the ticket'),2000);
//     });
//     const popcone= new Promise((resolve,reject)=> resolve('bought the popcones'))
//     const water= new Promise((resolve,reject)=> resolve('bought water'))
    
//     let pro= await prms;
//     let [pop,wat]=await Promise.all([popcone,water])
//     console.log([`${pop}, ${wat}`])
//     return pro
//     }
//     preMovie().then((m)=> console.log(`person 2 have ${m}`))
//     console.log('person 3 shows the ticket');
//     console.log('person 4 shows the ticket');
//////////////////////////////

// let preMovie= async()=>{
//     const prms=  new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('no ticket'),2000);
//     });
//     let pro
// try{
//      pro= await prms;
// }catch(e){
//     pro= 'sad face,'+ e;
// }
    
//     return pro
//     }
//     preMovie().then((m)=> console.log(`person 2 have ${m}`))
//     console.log('person 3 shows the ticket');
//     console.log('person 4 shows the ticket');






