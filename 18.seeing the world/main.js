var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a new array of countries and print its original order
var countriesToVist = ["Scotland", "Denmark", "london", "China"];
console.log("orignal order:", countriesToVist);
//print the array in alphabetical order without modifing the actual array list
console.log("Alpahabetical order :", __spreadArray([], countriesToVist, true).sort());
//show that array is still in its orignal order
console.log("Still in orignal order :", countriesToVist);
//print the array in reverse
console.log("Reverse oder :", __spreadArray([], countriesToVist, true).reverse());
//show that the array is still in its orignal order
console.log("Still in orignal order :", countriesToVist);
//we have changed the orignal array order now
console.log("Orignal array Reversed :", countriesToVist.reverse());
//print the array to show that it's back to its orignal order
console.log("Back to orignal order :", countriesToVist.reverse());
//print tha array to show that its's order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order :", countriesToVist.sort());
//we have changed again tha orignal array order now in reverse order again
console.log("orignal array Reversed again :", countriesToVist.reverse());
