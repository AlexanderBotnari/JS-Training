const events = new Map([
    [19, 'Goal'],
    [21, 'Substitution'],
    [43, 'Goal'],
    [56, 'Substitution'],
    [69, 'Yellow card'],
    [73, 'Substitution'],
    [75, 'Yellow card'],
    [79, 'Substitution'],
    [81, 'Red card'],
    [93, 'Goal'],
]);

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
};

//1
const uniqueEvents = [...new Set(events.values())];
console.log(uniqueEvents);

//2
events.delete(75);
console.log(events);

//3
const minutes = [...events.keys()];
let totalDifference = 0;
for (let i=minutes.length-1; i >= 0; i--){
    if( i > 0) {
        totalDifference += minutes[i] - minutes[i - 1];
    }
}
console.log(`On average, an event happened every ${totalDifference / (minutes.length - 1)} minutes`);

//4
for (const event of events){
    const halfEvent = event[0] < 45 ? `[First Half] ${event[0]} : ${event[1]}` : `[Second Half] ${event[0]} : ${event[1]}`;
    console.log(halfEvent);
}















