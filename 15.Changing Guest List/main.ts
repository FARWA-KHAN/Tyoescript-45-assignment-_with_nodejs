

let GUEST_LIST :string[] = ['Babar Azam','Shadab khan','Rizwan'];

for(let i=0; i<'Guest_List'.length; i++){

    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
}

let absent_Guest :string ='Babar Azam' ; 

let new_Guest :string ='saim ayub' ; 

GUEST_LIST[0] = new_Guest ;


for(let i=0; i<'Guest_List'.length; i++){}


    console.log('Dear Mr.' + GUEST_LIST['0'] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You\n\n')



console.log(`Mr. ${absent_Guest} is not coming to the party. `);