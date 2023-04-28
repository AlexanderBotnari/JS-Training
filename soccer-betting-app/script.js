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

    printGoals: () => {
        let found = false;
        for (let i = 0; i < this.players[0].length; i++) {
          for (let k = 0; k < this.scored.length; k++) {
            if (this.players[0][i] === this.scored[k]) {
              console.log(this.players[0][k]);
              found = true;
            }
          }
        }
        if (!found) {
          console.log("No scored players found in this match");
        }
      },

   };

const players1 = game.players[0];
const players2 = game.players[1];

//    console.log(players1);
//    console.log(players2);

const [goalkeeper, ...fieldPlayers ] = players1;
// console.log(goalkeeper);
// console.log(fieldPlayers);

const bothPlayers = [...players1, ...players2];
// console.log(bothPlayers);

const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
// console.log(players1Total);

const {...oddsVariable} = game.odds;
// console.log(oddsVariable);

game.printGoals();