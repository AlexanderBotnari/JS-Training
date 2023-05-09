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
        this.speed -= 5
        console.log(`Speed of ${this.name} -> ${this.speed}`)
    }

    get speedMph(){
        return this.speed / 1.6;
    }

    set speedMph(speed){
        this.speed = speed * 1.6;
    }
}

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda.accelerate();
bmw.accelerate();
honda.accelerate();
bmw.accelerate();

honda.break();
bmw.break();

console.log('Honda speed in mph '+honda.speedMph);
console.log('BMW speed in mph '+bmw.speedMph);

honda.speedMph = 100;
console.log(honda.speed);