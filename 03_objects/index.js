class Warrior{
  constructor(name, health, power, armor){
    this.initialHealth = health;
    this.health = health;
    this.power = power;
    this.armor = armor;
    this.name = name;
  }
  attack(enemy){
    enemy.receive(this.power);
  }
  receive(power){
    this.health -= (power - this.armor);
    if(this.health < 0) throw `!!!${this.name} Defeated!!!`;
  };
  lifePercentage(){
    return this.health / this.initialHealth * 100;
  }
};

let w1 = new Warrior('Goku', 20,10,5);
let w2 = new Warrior('Freezer', 20,10,3);

w1.attack(w2);
console.log(`::${w1.name}:: ${w1.lifePercentage()} vs ::${w2.name}:: ${w2.lifePercentage()}`);
w2.attack(w1);
console.log(`::${w1.name}:: ${w1.lifePercentage()} vs ::${w2.name}:: ${w2.lifePercentage()}`);
w1.attack(w2);
console.log(`::${w1.name}:: ${w1.lifePercentage()} vs ::${w2.name}:: ${w2.lifePercentage()}`);
w2.attack(w1);
console.log(`::${w1.name}:: ${w1.lifePercentage()} vs ::${w2.name}:: ${w2.lifePercentage()}`);
w1.attack(w2);
console.log(`::${w1.name}:: ${w1.lifePercentage()} vs ::${w2.name}:: ${w2.lifePercentage()}`);