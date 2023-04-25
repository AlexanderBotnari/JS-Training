let getAverage = ((firstMonth, secondMonth, thirdMonth) => {
    let res = (firstMonth + secondMonth + thirdMonth) / 3;
    return res;
});

let dept1 = {
    firstMonth: 2000,
    secondMonth: 3000,
    thirdMonth: 1000,
}
let dept2 = {
    firstMonth: 5000,
    secondMonth: 5000,
    thirdMonth: 1000,
}

let dept1Average = getAverage(dept1.firstMonth, dept1.secondMonth, dept1.thirdMonth);
let dept2Average = getAverage(dept2.firstMonth, dept2.secondMonth, dept2.thirdMonth);

let printBonus = ((dept1AverSales, dept2AverSales) => {
    if(dept1AverSales > dept2AverSales){
        let diference = dept1AverSales - dept2AverSales;
        let percentage = diference / dept2AverSales * 100;
        if(percentage >= 30){
            console.log(`Dept 1 este mai mare cu ${percentage}% decat dept 2`);
        }else{
            console.log('Procentul este mai mic de 30');
        }
    }else{
        let diference = dept2AverSales - dept1AverSales;
        let percentage = diference / dept1AverSales * 100;
        if(percentage >= 30){
            console.log(`Dept 2 este mai mare cu ${percentage}% decat dept 1`);
        }else{
            console.log('Procentul este mai mic de 30')
        }
    }
});

printBonus(dept1Average, dept2Average);
