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
    scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },
};

//1
for(const scored of game.scored.entries() ){
    console.log(`Goal ${scored[0] + 1} - ${scored[1]}`);
}

//2
let sum = 0;
let nrOfValues = 0;
for(const value of Object.values(game.odds)){
    sum += value;
    nrOfValues++;
}
// console.log("Average is : "+(sum / nrOfValues));
console.log("Average is : "+(sum / Object.values(game.odds).length));

//3
for (const [name, odd] of Object.entries(game.odds)){
    const mutableText = name === 'draw' ? 'draw' : `${game[name]} victory`;
    console.log(`Rate for ${mutableText} : ${odd}`);
}

//4
const scored = game.scored;
const goalScorers = {};

for(const player of scored){
    goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}

console.log(goalScorers);




