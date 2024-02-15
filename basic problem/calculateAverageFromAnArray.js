function makeAvg(average){
    let sum = 0;
    for (const number of average){
        sum += number;
    }
    avg = sum / average.length;
    return avg.toFixed(2);
}


const arrayAvg = [12,5,7,22,81,7,91];
const average = makeAvg(arrayAvg);

console.log(average);
