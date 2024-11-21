//singleton


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dison",
    "full name": "Dison Davis",
    [mySym]: "myKey1", //this is how we use Symbol
    age: 37,
    location: "Bangalore",
    email: "disondavis@msn.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "disondavis@gmail.com"
console.log(JsUser)
//Object.freeze(JsUser) //freeze the object, there won't be any further changes in the object.
JsUser.email = "tddison@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hi, JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hi, JS user ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())