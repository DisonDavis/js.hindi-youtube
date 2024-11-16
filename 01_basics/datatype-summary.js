// Primitive Type
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3 // both of them treat as number.
const bigNumber = 92843792837490287340928734982734n


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
// console.log(id)
// console.log(anotherId)



//Reference (Non Primitive )

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Dison",
    age: 37
}
const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof heros)