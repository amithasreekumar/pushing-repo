// let name = {
//      first: 'amitha',
//      last:'sreekumar'
// }
// let name2 = {
//      first: 'manu',
//      last:'somanadhan'
// }
// let fullName= function(town){
//      console.log(this.first + ' '+ this.last+ ' '+ town)
// }
// fullName.call(name, 'pandikkad');
// fullName.call(name2, 'valanjeri');


let name = {
     first: 'amitha',
     last:'sreekumar'
}
let name2 = {
     first: 'manu',
     last:'somanadhan'
}
let fullName= function(town){
     console.log(this.first + ' '+ this.last+ ' '+ town)
}
fullName.apply(name, ['pandikkad']);
fullName.apply(name2, ['valanjeri']);