// Create a super class
class Animal {
    hunger: number
    health: number
    protected coordX: number
    coordY: number

    setCoordX(x: number) {
        this.coordX = x;
    }

    getCoordX() {
        return this.coordX;
    }

    setCoordY(y: number) {
        this.coordY = y;
    }

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
    makeNoise() {
        console.log("Meow");  
    }
}
    
class Dog extends Animal {}

const bruno = new Cat();
bruno.setCoordX(10);
console.log(bruno.getCoordX());




const blanco = new Dog();


