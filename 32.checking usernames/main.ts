let current_users = ["farwa", "anosha", "kashaf", "rameen", "ayesha"]

let new_users = ["salar", "farwa" ,"ayesha" , "imama", "maliha"]

new_users.forEach(new_one_user => { 
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() ===new_one_user.toLowerCase())
    
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)
    }
    else{
        console.log(`This user ${new_one_user} is available`)
    }
})