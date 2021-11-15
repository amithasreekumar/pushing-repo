// let prom = new Promise((resolve,reject)=>{
//     let add= 1+2;
//     if (add===2 ){
//         resolve('equal to 2')
//     }else {
//         reject('not equal') 
//     }
// });

// prom.then((message)=>{console.log(message)}).catch((msg)=>{console.log(msg)});


// let cleanRoom= function(){
//     return new Promise((resolve,reject)=> {resolve('cleaned ')});
// };
// let disposeWaste= function(message){
//     return new Promise((resolve,reject)=> {resolve( message+'disposed ')});
// };
// let winIcecream= function(message){
//     return new Promise((resolve,reject)=> {resolve( message +'won icecream')});
// };

// cleanRoom().then((result)=>{
//     return disposeWaste(result);
// }).then((result)=>{
//     return winIcecream(result);
// }).then((result)=>{
// console.log('finished-'+ result);
// })

// Promise.all([cleanRoom(),disposeWaste(),winIcecream()]).then(()=>{console.log('all are finished')});
// Promise.race([cleanRoom(),disposeWaste(),winIcecream()]).then(()=>{console.log('one of them is finished')});


///////////////////////////////////////////////////////////////////////////////////////



function fakeReq(url){
return new Promise((resolve,reject)=>{
    const delay = Math.floor(Math.random()*(4500)+1000);
    setTimeout(()=>{
        if(delay > 4000){
            reject('time out!!')
        }else{
            resolve('completed successfully!!')
        }
    },delay)
})
}

fakeReq('yelp/store/login/page-1').then(()=>{
    console.log('it worked page-1')
    return fakeReq('yelp/store/login/page-2')
})
.then(()=>{
    console.log('it worked page-2')
    return fakeReq('yelp/store/login/page-3')
})
.then(()=>{
    console.log('it worked page-3')
    return fakeReq('yelp/store/login/page-4')
})
.then(()=>{
    console.log('it worked page-4') 
})
.catch(()=>{
    console.log('loading faild.')
})

// function fakeReq(url){
//     return new Promise((resolve,reject)=>{
//         const num = Math.floor(Math.random()*(4500))+1000;
//         setTimeout(()=>{
//             console.log(num)
//             resolve('the random no is '+ num);
//         },1000)
//     })
//     }
    
//     fakeReq('yelp/store/login/page-1')
//     .then(()=> fakeReq('yelp/store/login/page-2'))
//     .then(()=> fakeReq('yelp/store/login/page-3'))
//     .then(()=> fakeReq('yelp/store/login/page-4'))
//     .then((data)=>{ 
//         console.log(data) 
//     })
    

    
    
    
    


