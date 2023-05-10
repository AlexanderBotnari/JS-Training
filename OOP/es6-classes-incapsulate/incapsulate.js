class Car{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
   }

    accelerate(){
        this.speed += 5
        console.log(`Speed of ${this.name} -> ${this.speed}`);
    }

    break(){
        this.speed -= 5;
        console.log(`Speed of ${this.name} -> ${this.speed}`);
        return this;
    }
}
   
class ElectricCar extends Car{ 
    
    #battery;

    constructor(name, speed, battery){
       super(name, speed);
       this.#battery = battery;
    }

    chargeBattery(chargeLevel){
        this.#battery += chargeLevel;
        return this;
    }

    accelerate(){
        this.speed += 10;
        this.#battery--;
        console.log(`${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${this.#battery}%`);
        return this;
    }
}

   const tesla = new ElectricCar('Tesla', 100, 33);
   // tesla.chargeBattery(80);
   console.log(tesla);
   tesla.accelerate().break().break().break().break().accelerate();
//    tesla.break();
//    tesla.break();
//    tesla.break();
//    tesla.break();
//    tesla.accelerate();