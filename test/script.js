//1
// const word = "sjkajbqkhbxhsqbxsq";
// console.log(word.length);

//2
// const number = 3;

// if(number % 2 == 0){
//  console.log("Numarul este par");
// }else{
//  console.log("Numarul este impar");
// }

//3
// const characters = "hello world";
// const arr = characters.split("");
// const reversed = arr.reverse();
// console.log(reversed.join(""));

//4
// function findLongestWord(str) {
//  const strSplit = str.split(' ');
//  let longestWord = "";
//  for(let i = 0; i < strSplit.length; i++){
//    if(strSplit[i].length > longestWord.length){
//       longestWord = strSplit[i];
//     }
//  }
//  return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


//5
// const word = 'madam';
// const arr = word.split("");
// const reversed = arr.reverse().join("");

// if(word === reversed){
//  console.log(" word is palindrom ");
// }else{
//  console.log(" word is not palindrome");
// }

//6
// const arr = [1, 2, 3, 4];

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//  sum += arr[i];
// }

// console.log(sum);

// arr.forEach(function(value){
//   sum += value;
// });
// let initial = 0;
// const sumWithInitial = arr.reduce(
//  (accumulator, currentValue) => accumulator + currentValue,
//  initial
// );

// console.log(sumWithInitial);

//7
// const arr = ['one', 'two', 'three'];
// const inversed = arr.reverse();
// console.log(inversed);

//8
// const arr = [1, 2, 3, 4, 4];
// const min = Math.min(...arr);
// const max = Math.max(...arr);

// console.log(min, max);

//9
// const numberIn = parseInt(prompt("Introduceți numărul"));

// if (numberIn % 3 === 0 || numberIn % 5 === 0) {
//   console.log(`${numberIn} este divizibil cu 3 și/sau 5.`);
// } else {
//   console.log(numberIn);
//   alert('Numărul nu este divizibil cu 3 și/sau 5.');
// }

//10
// function enumerateVocals(phrase){
//  const arrVocals = ['e', 'u', 'i', 'o', 'a'];
//  let vocalsCount = 0;

//  for (let letter of phrase.toLowerCase()) {
//   if (arrVocals.includes(letter)) {
//    vocalsCount++;
//   }
// }
//  console.log(vocalsCount);
// }

// enumerateVocals("Javascript");

//11
// const numberIn = parseInt(prompt("Introduceți un număr:"));

// if (!isNaN(numberIn)) {
//   console.log("Numerele de la 1 până la " + numberIn + " sunt:");

//   for (let i = 1; i <= numberIn; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("Vă rugăm să introduceți un număr valid.");
// }

//12
// const person = {
//  name: "Ion",
//  age: 43,
// }

// console.log(`Nume: ${person.name}, varsta: ${person.age} ani`);

//13
// const person = {
//  name: "Ion",
//  age: 43,

//  salut(){
//   console.log(`Salut ${this.name} !`);
//  }
// }

// person.salut();

//14
class Person {
 constructor(name, age) {
   this.name = name;
   this.age = age;
 }

 salut() {
   console.log(`Salut, ${this.name}!`);
 }
}

class Student extends Person {
 constructor(name, age, faculty) {
   super(name, age);
   this.faculty = faculty;
 }
}

const student = new Student('Vania', 20, 'Economy');
student.salut();