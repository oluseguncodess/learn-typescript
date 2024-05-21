class Player {
    name: string
    health: number
    isInvincible: boolean
    crush: Player;
    greet() {
        console.log(`Hello World, my name is ${this.name}`);
        
    }
}

const mario = new Player();
mario.name = "Mario"
mario.health = 10;
mario.isInvincible = false;

const peach = new Player();
peach.name = "Peach";
peach.health = 11;
peach.isInvincible = true;

mario.greet();
peach.greet();

