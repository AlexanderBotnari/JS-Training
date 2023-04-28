const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },

    printGoals(...playersInGame) {
        let found = false;
        for (let i = 0; i < playersInGame.length; i++) {
            for (let k = 0; k < this.scored.length; k++) {
                if (playersInGame[i] === this.scored[k]) {
                    console.log(`${playersInGame[i]} scored a goal`);
                    found = true;
                }
            }
        }
        if (!found) {
            console.log("No scored players found in this match");
        }
    },
};


// const [players1, players2] = game.players;
//
// //    console.log(players1);
// //    console.log(players2);
//
// const [goalkeeper, ...fieldPlayers ] = players1;
// // console.log(goalkeeper);
// // console.log(fieldPlayers);
//
// const bothPlayers = [...players1, ...players2];
// // console.log(bothPlayers);
//
// const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
// // console.log(players1Total);
//
// const {...oddsVariable} = game.odds;
// // console.log(oddsVariable);
//
// game.printGoals(...players1);
//
// const {odds : team1, team2, draw} = game;
//
// team1 < team2 && console.log(`${game.team1} is more likely to win`);
// team1 > team2 && console.log(`${game.team2} is more likely to win`);

//////////training destruct
//1//
// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     pages: 218
// };
//
// const {title, author} = book;
// console.log(title + " - " + author);

//2//
// const arr = [5, 10, 15, 20];
// const [a1, ,a2, ] = arr;
// console.log(a1 + " " + a2);

//3//
// const user = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     age: 32,
//     city: "New York"
// };
//
// const {name, email} = user;
// console.log(name + " " + email);

//4//
// const dog = {
//     name: "Rufus",
//     age: 3,
//     breed: "Labrador",
//     bark() {
//         console.log("Woof!");
//     }
// };
//
// const {name, bark} = dog;
// console.log(name + " " + bark);

//training spread
//1// concat
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//
// const newArr = [...arr1, ...arr2];
// console.log(newArr);

//2// filter
// const arr = [1, 2, 3, 2, 1, 4, 5, 4];
// const newArr = arr.filter((value, index, array) => array.indexOf(value) === index);
// console.log(newArr);

//3// clone obj
// const person = {name: 'John', age: 30, hobbies: ['reading', 'hiking']};
//
// const personCopy = {...person};
//
// personCopy.age = 31;
//
// console.log(person.age+" - "+ personCopy.age);

//4// union obj
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
//
// const newObj = {...obj1, ...obj2};
// console.log(newObj);

//5// delete obj props
// const person = {name: 'John', age: 30, hobbies: ['reading', 'hiking']};
// const {name, age} = person;
// const newPerson = {name, age};
// console.log(newPerson);