function printHumiditiesForecast(arr){
    for(let i=0; i<arr.length; i++){
        console.log(` ...${arr[i]}% humidity in ${i+1} days`);
    }
}

let data1 = [49, 51, 63];
let data2 = [31, 29, 43, 58, 52];

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);