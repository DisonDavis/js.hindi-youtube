function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
    
}

const result = addTwoNumbers(1,2)

console.log("Result ",result);

function loginUserMessage(userName){
    if(userName === undefined){ //(if(!userName))
        console.log("Please enter a user name")
    
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage())
