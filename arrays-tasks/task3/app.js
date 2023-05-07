//Folosind metoda filter(), afișați numerele impare dintr-un array de numere.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.filter(value => value % 2 !== 0));

// Folosind metoda map(), creați un nou array care să conțină dublul fiecărui element dintr-un array dat.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.map(value => value * 2));

//Folosind metoda reduce(), găsiți suma tuturor numerelor dintr-un array dat.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.reduce((acc, value) => acc + value));

//Folosind metoda slice(), creați un nou array care să conțină elementele dintr-un interval specificat al unui array dat.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.slice(2, 4));

//Folosind metoda indexOf(), găsiți indexul primului element dintr-un array dat care are o anumită valoare.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.indexOf(3));

// Folosind metoda sort(), sortați un array de numere în ordine descrescătoare.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.sort((a, b) => b - a));

// Folosind metoda concat(), combinați două sau mai multe array-uri într-unul singur.
// const arr = [3, 1, 9, 4, 5, 10];
// const newArr = [11, 12, 13];

// console.log(arr.concat(newArr));

// Folosind metoda every(), verificați dacă toate elementele dintr-un array sunt numere pozitive.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.every(value => value > 0));

//Folosind metoda some(), verificați dacă există cel puțin un element negativ într-un array de numere.
// const arr = [3, 1, 9, 4, 5, 10];
// console.log(arr.some(value => value < 0));

//Folosind metoda find(), găsiți primul element dintr-un array care respectă o anumită condiție dată.
const arr = [3, -1, 9, 4, 5, 10];
console.log(arr.find(value => value === 10));