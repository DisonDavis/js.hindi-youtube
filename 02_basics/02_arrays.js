const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros)
// console.log(marvel_heros[3][0])

// const allHero = marvel_heros.concat(dc_heros) // it create new array, no changes in the original array
// console.log(allHero)

const allHero = [...marvel_heros, ...dc_heros] //same result as concat
// console.log(allHero)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) /*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/
// console.log(real_another_array)

// console.log(Array.isArray("Dison")) //false
// console.log(Array.from("Dison")) //[ 'D', 'i', 's', 'o', 'n' ]
// console.log(Array.from({name: "hitesh"})) //[] !

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]


