//define a function with a rest parameter that accept items arguments representing our sandwich
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwichwith the following items");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Now Enjoy Sandwhich");
}
//call the function 3 times with 3 different number of arguments
make_Sandwich("chicken", "cheese", "mayo", "egg");
make_Sandwich("bread", "butter");
make_Sandwich("bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
