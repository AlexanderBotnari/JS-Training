const Car = function(name, speed){
 this.name = name;
 this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 5
    console.log(`Speed of ${this.name} -> ${this.speed}`);
}

Car.prototype.break = function (){
    this.speed -= 5;
    console.log(`Speed of ${this.name} -> ${this.speed}`);
}

const ElectricCar = function(name, speed, battery){
    Car.call(this, name, speed);
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function(chargeLevel){
    this.battery += chargeLevel;
}

ElectricCar.prototype.accelerate = function(){
    this.speed += 10;
    this.battery--;
    console.log(`${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${this.battery}%`);
}

const tesla = new ElectricCar('Tesla', 100, 33);
// tesla.chargeBattery(80);
console.log(tesla);
tesla.accelerate();
tesla.break();
tesla.break();
tesla.break();
tesla.break();
tesla.accelerate();