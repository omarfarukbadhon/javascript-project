let findType = {
    name: "Omar Faruk",
    age: 26,
    city: "Meherpur",
    isMarried: true
}

const properties = Object.keys(findType);
const values = Object.values(findType);

for (const data in findType){
    console.log("key: ", data, "|", "type: ", typeof findType[data]);
}