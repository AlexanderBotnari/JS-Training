const Car = function(name, speed){
 this.name = name;
 this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 5
    console.log(`Speed of ${this.name} -> ${this.speed}`);
}

Car.prototype.break = function (){
    this.speed -= 5
    console.log(`Speed of ${this.name} -> ${this.speed}`)
}

const car1 = new Car('Honda', 120);
const car2 = new Car('BMW', 150);

car1.accelerate();
car2.accelerate();
car1.accelerate();
car2.accelerate();

car1.break();
car2.break();
