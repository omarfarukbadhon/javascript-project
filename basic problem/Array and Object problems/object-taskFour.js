let student = {
    name: "Omar Faruk",
    age: 26,
    city: "Meherpur",
    isStudent: true
}

const properties = Object.keys(student);
let count = 0;
for(const property of properties){
    console.log(property);
    count += 1;
}

console.log(count);