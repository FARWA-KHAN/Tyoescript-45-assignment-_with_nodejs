var current_users = ["farwa", "anosha", "kashaf", "rameen", "ayesha"];
var new_users = ["salar", "farwa", "ayesha", "imama", "maliha"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This user ".concat(new_one_user, " is available"));
    }
});
