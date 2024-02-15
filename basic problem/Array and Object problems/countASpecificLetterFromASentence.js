const sentence = "Count how many times a string has the letter a";

let count = 0;
for (const aNumber of sentence){
    // console.log(aNumber);
    if (aNumber === "a"){
        count += 1;
    }
}

console.log(count);