let statement = "I am a hard working person";

statement = statement.split(" ");

// console.log(statement);

let reverseStatement = [];

for(let word of statement){
    reverseStatement.unshift(word);
}

// console.log(reverseStatement);

const sentence =  reverseStatement.join(" ");

console.log(sentence);