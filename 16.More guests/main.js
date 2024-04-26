var Guest_List = ['Babar Azam', 'Shadab khan', 'Rizwan'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
var absent_Guest = 'Babar Azam';
var new_Guest = 'saim ayub';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party. "));
console.log('Good News! we find big table so we are inviting 3 more guests.');
Guest_List.unshift('imran khan');
Guest_List.splice(2, 0, 'shahruk khan');
Guest_List.push('salman khan');
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n');
}
