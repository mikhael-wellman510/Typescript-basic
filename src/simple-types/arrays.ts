const fruit: string[] = [];

fruit.push("Pisang");
fruit.push("Semangka");
fruit.push("Melon");

console.log(fruit);

// TUPLE

let ourTuple: [number, boolean, string];
ourTuple = [12, true, "mikhael"];
ourTuple.push("Wellman");
ourTuple.push(28);
console.log("Hasil tuple : ", ourTuple);

// Todo , read only sehingga tidak bisa menambah atau menguranginya
let roles: readonly string[] = ["Admin", "User"];
console.log("Roles", roles);
