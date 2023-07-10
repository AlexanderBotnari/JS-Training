function learnJavaScript() {
    const divisibleBy = (numbers, divisor) => {
        const arr = [];
        for (const number of numbers) {
            if(number % divisor === 0){
                arr.push(number);
            }
        }
      return arr;
    }
    return divisibleBy([1, 2, 3, 4, 5, 6], 2)
  }

console.log(learnJavaScript());