let jack = {
    name: 'Jack',
    lastname: 'White',
    weight: 70,
    height: 1.80,

    calculateBMI () {
        return this.weight / this.height ** 2 ;
    }
};

let mike = {
    name: 'Mike',
    lastname: 'Black',
    weight: 90,
    height: 1.78,

    calculateBMI() {
        return this.weight / this.height ** 2 ;
    }
};

mike.bmi = mike.calculateBMI();

console.log(mike.bmi);
console.log(jack.bmi);