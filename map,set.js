////Maps

// const map1 = new Map();
// map1.set('key', 'value');
// map1.set('toyota', 'camary')
// map1.set('honda', 'civic')
// console.log(map1);
// // map1.delete('toyota')
// console.log(map1);
// console.log(map1.get('toyota')) 
// // console.log(map1.get('key'));
// // map1.clear();
// console.log(map1);
// console.log(map1.values());



// const map2 = new Map([[true,'value'],['num',25]])
// console.log(map2);


// let obj = Object.fromEntries(map1)
// console.log(obj);
// let arr= Array.from(map1)
// console.log(arr);
// let map2= new Map(Object.entries(obj))
// console.log(map2);

//////////////////////////////////////////////

// in the case of objects
// let obj = {
//     'name':'amithas',
//     'age':'26'
// };
// let main={
//     [obj]:'i am main'
// }
// console.log(main);//{ '[object Object]': 'i am main' }

// in the case of map
// let map = new Map();
// map.set(obj,'i am map')
// console.log(map);//Map(1) { { name: 'amithas', age: '26' } => 'i am map' }



////Sets


let set = new Set();
set.add('ammu');
set.add('manu');
set.add('abi');
set.add('ammu');
console.log(set);
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

// let set2 = new Set(['ami','kunju','chinju']);
// console.log(set2)





// const luke = {
//     firstName: 'Luke',
//     lastName: 'Skywalker',
//     occupation: 'Jedi Knight',
//   }
//   const map = new Map(Object.entries(luke))
//   console.log(map);