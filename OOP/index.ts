class Player {
    health: number
    speed: number
    isInvincible: true;
    move() {
        console.log("Balll!!!");
        
    }
}

const mario = new Player();
mario.health = 100;
console.log(mario);
