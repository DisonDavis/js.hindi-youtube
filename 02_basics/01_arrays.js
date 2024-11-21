//array
const myArr = [0, 1, 2, 3, 4, "Dison"]
const myHeros = ["shakthiman", "naagraj"]

const myArr2 = new Array(0, 1, 2, 3, 4)

//console.log(myArr2)
// myArr2.push(5)
// myArr2.push(6)

// myArr2.pop()

myArr2.unshift(9)
//myArr2.shift()
// console.log(myArr2)

const newArr = myArr.join() //convert array into string.
// console.log(myArr)
// console.log(newArr)

//slice, splice
 console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //Start with 1 and end till 3(exclude 3)
console.log(myn1)
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //It includes number from 1 to 3(includes 3), but those numbers will be removed from original array

console.log(myn2)
console.log("C ", myArr)
