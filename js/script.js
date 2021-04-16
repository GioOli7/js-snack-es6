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
/*
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
*/

/**
 * jsnack 3
    Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
    inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter
 */
/*
const myArray = ['Paolo', 'Fabio', 'Lorenzo', 'Giovanni', 'Giuseppe', 'Sarah'];

// chiedo all'utente di indicare il numero min
let min = parseInt(prompt(`Inserisci un numero tra 0 e ${myArray.length - 1}`));
while (isNaN(min) || min < 0 || min > myArray.length) {
    min = parseInt(prompt(`Inserisci un numero tra 0 e ${myArray.length - 1}`));
}

// chiedo all'utente di indicare il numero max
let max = parseInt(prompt(`Inserisci un numero tra ${min} e ${myArray.length - 1}`));
while (isNaN(max) || min > max || max > myArray.length) {
    max = parseInt(prompt(`Inserisci un numero tra ${min} e ${myArray.length - 1}`));
}

// con il metodo filter ritorno solo i valori dell array compresi tra gli input dell utente
const newArrayFiltered = myArray.filter((element, index) => {
    return min <= index && max >= index;
});
console.log(`


OUTPUT SNACK 3
-----------
`);
console.log('Array originale', myArray);
console.log('Array Filtrato:', newArrayFiltered);
*/



/*
jsnack 4
Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore -
 si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)
*/

const vetrina = [
    {
        nome: 'Jersey',
        tipologia: 'Maglietta',
        colore: 'beige',
    },
    {
        nome: 'York',
        tipologia: 'Giacca',
        colore: 'blu',
    },
    {
        nome: 'Vegas',
        tipologia: 'Pantalone',
        colore: 'red',
    },
    {
        nome: 'London kid',
        tipologia: 'Pantaloncini',
        colore: 'orange',
    },
    {
        nome: 'Lebron',
        tipologia: 'Scarpe',
        colore: 'black',
    },
]

const newVetrina = vetrina.map((element) => {
    const random = (min, max) =>  Math.floor( Math.random() * (max - min + 1) + min ); // random number con arrow function
    array = {
        ...element,
        prezzo: rand = random(10, 50),
    }
    return array;
})

console.log(`


OUTPUT SNACK 4
-----------
`);
console.log(`-----------Vetrina prima della modifica-----------`);
console.table(vetrina);
console.log(`-----------Vetrina dopo della modifica-----------`);
console.table(newVetrina);