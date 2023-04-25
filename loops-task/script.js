let bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
let tips = [];
let totals = [];

function calculateTips(){
    for(let i=0; i<=bills.length; i++){
        if(bills[i] <= 50){
            tips.push(10);
            totals.push(bills[i] + 10);
        }else{
            tips.push(20);
            totals.push(bills[i] + 20);
        }
    }
}

function calculateAverage(arr){
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(`Average: ${average}`);
    return average;
}


calculateTips();
console.log(bills);
console.log(tips);
console.log(totals);

calculateAverage(bills);
