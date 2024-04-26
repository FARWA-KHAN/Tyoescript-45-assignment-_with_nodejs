var GUEST_LIST = ['Babar Azam', 'Shadab khan', 'Rizwan'];
for (var i = 0; i < 'Guest_List'.length; i++) {
    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
var absent_Guest = 'Babar Azam';
var new_Guest = 'saim ayub';
GUEST_LIST[0] = new_Guest;
for (var i = 0; i < 'Guest_List'.length; i++) { }
console.log('Dear Mr.' + GUEST_LIST['0'] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n');
console.log("Mr. ".concat(absent_Guest, " is not coming to the party. "));
