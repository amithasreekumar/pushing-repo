// function loadingScreen(){
// console.log('1 loading screen');
// }
// function hideLoading(){
//     console.log('4 hide loading');
// }

// function fetchData(){
//     console.log('2 started pulling data')
// setTimeout(()=>{
//     console.log('3 finished pulling data')
    
// },2000)

// }
// loadingScreen();
// fetchData();
// hideLoading();

// this is where asynchronus programing comes in


// function loadingScreen(){
//     console.log('1 loading screen');
//     }
//     function hideLoading(){
//         console.log('4 hide loading');
//     }
    
//     function fetchData(callback){
//         console.log('2 started pulling data')
//     setTimeout(()=>{
//         console.log('3 finished pulling data')
//         callback();
//     },2000)
    
//     }
//     loadingScreen();
//     fetchData(hideLoading);
////////

function printString(string, callback){
    setTimeout(
      () => {
        console.log(string)
        callback()
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }
  function printAll(){
    printString("A", () => {
      printString("B", () => {
        printString("C", () => {})
      })
    })
  }
  printAll()



    
