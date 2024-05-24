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
    arrows: number
    attack() {
        super.attack()
        console.log("I am firing an arrow");
        this.arrows -= 1
    }
}
class Mage extends Hero{
    mana: number;

    attack() {
        super.attack();
        console.log("Throwing a potion");
        this.mana -= 1
    }
}
class Knight extends Hero{
    shield: number

    attack(){
        super.attack();
        console.log("I am swinging a sword"); 
    }
}

const archer = new Archer();
const mage = new Mage();
const knight = new Knight();
 
archer.attack();
mage.attack();
knight.attack();