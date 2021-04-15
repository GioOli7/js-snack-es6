// Snack 1
//Creare un array di oggetti: 
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: 'Bici Lite',
        peso: 13.10,
    },
    {
        nome: 'Bici Race',
        peso: 10.70,
    },
    {
        nome: 'Bici Pro',
        peso: 7.25,
    },
]

let biciPiuLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bici[i];
    }
}
const {nome, peso} = biciPiuLeggera;
// console.log(`${nome} è la bici più leggera, con un peso di ${peso} kg.`);
const string = `<strong>${nome}</strong> è la bici più leggera del negozio, con un peso di <strong>${peso} kg </strong>.`

document.getElementById('biciLeggera').innerHTML = string;





// Snack 2
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

var teams = [
    {
        nome: 'PSG',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Ajax',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Manchester City',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

//b
for (let i = 0; i < teams.length; i++) {
    let team = teams[i];
    team.puntiFatti = random(0,100);
    team.falliSubiti = random(0,20);
}
console.table(teams);

// c
const newTeams = [];
for (let i = 0; i < teams.length; i++) {
    let team = teams[i];
    let {nome, falliSubiti} = team;

    newTeams.push(
        {
            nome,
            falliSubiti,
        }
    )
}
console.table(newTeams);


// random function
function random(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
