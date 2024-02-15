const sentence = 'capitalize Every first Letter of each word in a String';

let wordArray = [];
for (let i = 0; i<sentence.length; i++){
    wordArray.push(sentence[i]);
}

wordArray[0] = wordArray[0].toUpperCase();

for (let i = 0; i<wordArray.length; i++){
    if(wordArray[i] === ' '){
        wordArray[i+1] = wordArray[i+1].toUpperCase();
    }
}

wordArray = wordArray.join('')

console.log(wordArray);