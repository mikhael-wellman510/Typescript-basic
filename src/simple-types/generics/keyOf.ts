interface Person {
  name?: string;
  age?: number;
}

function printPersons(person: Person, property: keyof Person) {
  console.log(`Print ${property} : ${person[property]}`);
}

let persons = {
  names: "Mike",
  age: 12,
};

printPersons(persons, "name");

console.log(persons["age"]);

if (Object.keys(persons).includes("age")) {
  console.log(persons["names"]);
}
