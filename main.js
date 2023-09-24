const firstName = "Abdul Kader";
const age = 23;

// if(firstName[0] === 'A' && age>18){
//     console.log('Name start with A and above 18');
// }else{
//     console.log("You are Hacker!");
// }
if(firstName[0] === 'a' || age>18){
    console.log('You are a right person');
}else{
    console.log('You are not a valid person');
}


const winningNumber = 19;
const userNumber = +prompt('Gauss your number');
if(userNumber === winningNumber){
    console.log("You gauss is right");
}else if(userNumber < winningNumber){
    console.log("Number is too low");
}else if(userNumber > winningNumber){
    console.log("Number is High");
}