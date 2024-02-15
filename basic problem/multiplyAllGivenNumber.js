function multiple(num1, num2, num3, num4){
    if(typeof num1 !== "number" && typeof num2 !== "number" && typeof num3 !== "number" && typeof num4 !== "number"){
        return "Please provide a number"
    }
    const result = num1 * num2 * num3 *num4;
    return result;
}

const multiplication = multiple(10,5,7,3);
console.log(multiplication);