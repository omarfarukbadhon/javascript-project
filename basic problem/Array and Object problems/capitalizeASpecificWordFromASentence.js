const sentence = "Count how many x-Ray times a string has the letter";

let wordArray = [];
for (const letter of sentence){
    wordArray.push(letter);
}

for(let i = 0; i<wordArray.length; i++){
    if(wordArray[i] === 'x'){
        wordArray[i] = 'X';
    }
}

const changeSentence = wordArray.join('');

console.log(changeSentence);
