const sentence = "Count how many times a string has the letter";

let count = 0;
let sentenceVowels = [];
const vowels = ["a", "e", "i", "o", "u"];
for(const letter of sentence){
    for(const vowel of vowels){
        if (letter === vowel && !sentenceVowels.includes(letter)){
            sentenceVowels.push(letter);
        }
    }  
}

if(sentenceVowels.length === vowels.length){
    console.log("This sentence have all vowels")
}else{
    console.log(`This sentence have ${sentenceVowels.length} vowels`)
}


// console.log(sentenceVowels);