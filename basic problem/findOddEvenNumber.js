function evenOdd(number){
    if(number % 2 ===0){
        return "EVEN";
    }else{
        return "ODD";
    }
}

const result = evenOdd(12);
console.log(result);