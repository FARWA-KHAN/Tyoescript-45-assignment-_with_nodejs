//define a function with a rest parameter that accept items arguments representing our sandwich

function make_Sandwich (...items: string[]){
    console.log("\nMaking a sandwichwith the following items");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("Now Enjoy Sandwhich");
}

//call the function 3 times with 3 different number of arguments
make_Sandwich("chicken", "cheese", "mayo", "egg");

make_Sandwich("bread" , "butter");

make_Sandwich("bread" , "butter", "mayo" , "egg" , "cheese" , "chicken" , "lettuce", "tomato");