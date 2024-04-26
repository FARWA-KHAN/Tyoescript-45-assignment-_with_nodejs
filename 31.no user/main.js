var userNames = ["farwa", "salar", "yaram", "admin", "wajdan"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty we need to find some user!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
