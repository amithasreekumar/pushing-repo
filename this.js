let obj1 = {
    name:'amitha',
    age:'26'
}
let obj2 = {
    name:'manu',
    age:'29'
}
let obj3 = {
    name:'kannan',
    age:'24'
}
let func = function(hb1,hb2) {
console.log(this.name +' '+ 'is '+ this.age +' '+ 'his hobbys are '+hb1+ ' ' +hb2)
}
let hb=['read','sing']
func.call(obj2,hb[0],hb[1]);
func.apply(obj1,hb);
let nw = func.bind(obj3,hb[0],hb[1]);
console.log(nw());























// let detail = function(a,b,c){
//     console.log(this.name + ' ' +'is working as an' + ' ' + this. position + ' ' + 'at'+' ' + a+ ' ' +b+ ' ' +c);
// }
// details.call(add3, 'mirosoft');
// details.call(add2, 'mirosoft');
// detail.apply(add, ['microsoft','google','apple']);

// let nd = details.bind(add, 'microsoft');
// console.log(nd());
