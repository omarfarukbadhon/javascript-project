const numbers = [1,6,8,25,95,25,68,55,48,161,656,1654,6554,6515];

let evenNumber = [];

for (let number of numbers){
    if(number % 2 === 0){
        evenNumber.push(number);
    }
}

console.log(evenNumber);