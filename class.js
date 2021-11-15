class Human {
    constructor(name) {
        this.year = 2021;
        this.name = name;
    }
    calcAge() { console.log(this.year - 1995) }
}
let pr1 = new Human('amitha');
// console.log(pr1);
// console.log(pr1.calcAge());
class Child extends Human {
    constructor(name, lastname) {  
        super(name);                   //Overriding constructor
        this.lastname = lastname;
    }
    nwAge() {
        console.log(`i am ${this.year-2020} year old`)
    }
    calcAge(){
        super.calcAge();              //Overriding a method
        this.nwAge();
    }
}
let pr2 = new Child('ishani', 'jithin');
console.log(pr2.calcAge());


