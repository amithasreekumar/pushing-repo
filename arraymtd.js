
let students = [
    {  name :'linta', mark: 98 },
    {  name :'abhi', mark: 56  },
    {  name :'sara', mark: 81  },
    {  name :'binil', mark: 42 },
    {  name :'john', mark: 38  },
    {  name :'cris', mark: 75  },
    {  name :'jack', mark: 48  },
]

let mark = students.map(function(student){
    return student.mark/10;
})
console.log(mark);

let fore = students.forEach(function(student){
    console.log (student.mark/10);
});


// let filter = students.filter((student)=> student.mark>80);
// console.log(filter);

// let every = students.every((student)=> student.mark>50); 
// console.log(every);

// let red = students.reduce((accum , student)=> student.mark+accum,0);
// console.log(red);

// let sort = students.sort((a,b)=> b.mark-a.mark);
// console.log(sort);






// let std= students.filter((student)=> {
//     return student.mark < 50
// } );
// console.log(std)

// let avg= students.map((student)=> {
//     return student.mark/10
// } );
// console.log(avg)


// let avg= students.forEach((student)=> {
//     console.log (student.mark/10)
// } );
  

// let some= students.some((student)=> {
//     return student.mark > 80
// } );
// console.log(some)
// let every= students.every((student)=> {
//     return student.mark > 50
// } );
// console.log(every)

// let classTot= students.reduce((currentTot , student)=> {
//     return student.mark+ currentTot
// },0 );
// console.log(classTot)

// let sort = students.sort((a,b)=> a.mark-b.mark);
// console.log(sort);

// let arr = [5, 2, 1, -10, 8];
// let dec = arr.sort((a,b)=> a-b )
// console.log(dec)
