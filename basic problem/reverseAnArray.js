const colors = ["Red", "blue", "green", "yellow", "black"];

let reverseColor = [];

for (let color of colors){
    reverseColor.unshift(color);
}

console.log(reverseColor);