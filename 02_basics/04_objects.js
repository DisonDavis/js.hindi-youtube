//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "dison",
            lastname: "davis"
        } 
    }
}

// console.log(regularUser.fullname?.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( {}, obj1, obj2) //merge, if use {}, it create new object and return that else it update the obj1 and return obj1
const obj3 = {... obj1, ...obj2} //both object assing and spread operations are same
// console.log(obj3)
// console.log(obj1)

const {name, id} = tinderUser //de-structure
console.log(id)

// {
//     "name": "dison",
//     "courseName": "js",
//     "price": "free"
// }