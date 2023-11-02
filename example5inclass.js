class Animals {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    walk(){
        console.log(this.name + ' can walk')
    }
    talk(){
        console.log(this.name + ' can talk')
    }
}

        
// in class
class Cat extends Animals {
    talk(){
        console.log(this.name, 'meows')
    }
}
class Dog extends Animals {
    talk(){
        console.log(this.name, 'barks')
    }
}

// Mine
// class Cat extends Animals {
//     constructor(name, age, walk, talk){
//     super(name,age);
// }
// talk() {
//     console.log(this.name + 'meows')
// }}


let Whiskers = new Cat('Whiskers', 7);
let spot = new Dog('spot', 4)
Whiskers.talk();
spot.talk()