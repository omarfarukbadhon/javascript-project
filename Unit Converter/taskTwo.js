function duplicateFound(listNumber, num){
    let sum = 0;
    for(let i =0; i< listNumber.length; i++){
        if (listNumber[i] === num){
            sum += 1;
        }
        
    }
    return sum;
}


const list = [2,5,14,6,21,5,1,7,3,9,1,5,4,3,6,9,44,5,5];

const find = duplicateFound(list, 1);

console.log(find);