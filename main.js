// const firstName = "Abdul Kader";
// const age = 23;

// if(firstName[0] === 'A' && age>18){
//     console.log('Name start with A and above 18');
// }else{
//     console.log("You are Hacker!");
// }
// if(firstName[0] === 'a' || age>18){
//     console.log('You are a right person');
// }else{
//     console.log('You are not a valid person');
// }


// const winningNumber = 19;
// const userNumber = +prompt('Gauss your number');
// if(userNumber === winningNumber){
//     console.log("You gauss is right");
// }else if(userNumber < winningNumber){
//     console.log("Number is too low");
// }else if(userNumber > winningNumber){
//     console.log("Number is High");
// }


// let tempInDegree = 23;
// if(tempInDegree < 0){
//     console.log("extremly cold outside");
// }else if(tempInDegree < 25){
//     console.log("It is cold outside");
// }else if(tempInDegree < 35){
//     console.log("Wheather is okay");
// }else if(tempInDegree < 45){
//     console.log("lets go for swim");
// }else{
//     console.log("too hot");
// }

// let day = 7;

// switch (day){
//     case 0:
//     console.log("Sunday");
//     break;
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//     console.log("Thursday");
//     break;
//     case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
//     break;
//     default:
//     console.log("Not a valid day");
// }


// let i = 0;
// while(i<=8){
//     console.log(i);
//     i++;
// }
// console.log("Hello"); 

// let num = 10;
// let total = 0;
// let i = 0;

// while (i <= 10) {
//     total = total + i;
//     i++
// }
// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);


// for (let i =1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }
// for (let i =1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }


// let i = 10;
// do{
//     console.log(i);
//     i++
// }while(i<=10);

// let fruits = ["apple", "banana", "grasp"];
// fruits[1]="mango";
// let obj = {};
// console.log(typeof fruits, fruits);
// console.log(Array.isArray(fruits));
// console.log(typeof obj);
// console.log(Array.isArray(obj));


let fruits = [
    "Banana",
    "Apple",
    "Mango"
]
// console.log(fruits);
// // fruits.push("Grasp");
// let propedFruits = fruits.pop();
// console.log(propedFruits);


fruits.unshift("grasp", "lemon", "orange");
console.log(fruits);