var userNames = ["farwa", "salar", "yaram", "admin", "wajdan"];
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
