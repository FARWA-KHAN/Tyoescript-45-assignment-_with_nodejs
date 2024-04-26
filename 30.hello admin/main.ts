let userNames = ["farwa", "salar" , "yaram" , "admin", "wajdan"];

userNames.forEach(oneUser => {
    if (oneUser === "admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report`)
    }
    else{
        console.log(`hello ${oneUser}, thank you for logging in again`)
    }
})