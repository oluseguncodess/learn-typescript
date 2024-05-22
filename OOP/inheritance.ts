// Create a super class
class Animal {
    hunger: number
    health: number
    coordX: number
    coordY: number

    eat() {
        console.log("I am eating");
        
    }

    sleep() {
        console.log("I am sleeping");
    }

    move() {
        console.log("I am moving");
        
    }

    makeNoise() {
        console.log("I make noise");
        
    }

}

//create subclasses that can inherit from the super class
class Cat extends Animal {

}

class Dog extends Animal {

}

const bruno = new Cat();
bruno.sleep();
