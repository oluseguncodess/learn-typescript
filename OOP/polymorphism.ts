class Hero {
    health: number
    hunger: number

    attack() {
        console.log("I am attacking");
    }
    move() {
        console.log("I am moving");
    }

    eat(){
        console.log("I am eating");
    }
}

class Archer extends Hero{
    
}
class Mage extends Hero{
    
}
class Knight extends Hero{
    
}