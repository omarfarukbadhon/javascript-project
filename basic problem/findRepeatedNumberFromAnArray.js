function zeroCount(binary){
    let sum  = 0;
    for (let number of binary){
        if (number === 0){
            sum += 1;
        }
    }
    return sum;
}


const binary = [0,0,0,1,0,1,1,0,0,1,1,1,0];
const sum = zeroCount(binary);

console.log(sum);