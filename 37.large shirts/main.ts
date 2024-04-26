//making a function
function make_shirt (size: string = "large", printMessage: string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

//calling a function
make_shirt();

//calling a function with by-default values
make_shirt();

//calling a function now with medium size and default message
make_shirt("Medium")

//calling a function now with small size and also different print message
make_shirt("Small" , "I love Javascript")