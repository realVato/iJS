'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// challenge #1
// ------------------------------
// const [players1, players2] = game.players

// const [gk, ...fieldPlayers] = players1
// const allPlayers = [...players1, ...players2]

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

// const {odds: {team1, x: draw, team2}} = game

// const printGoals = function(...players) {
//   console.log(`${players.length} ggoals were scored`);
// }

//  printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels')
//  printGoals(...game.scored)

// team1 < team2 && console.log(`team 1 is the shit`);
// --------------------------------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const entries = Object.entries(game.scored);

for (let [i, el] of entries) {
  i = parseInt(i);
  console.log(`Goal ${i + 1}: ${el}`);
}

//2.
const values = Object.values(game.odds);
let avg = 0;

for (const odd of values) {
  avg += odd;
}

avg /= values.length;
console.log(avg);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory for ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
