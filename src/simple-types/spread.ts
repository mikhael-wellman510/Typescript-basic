const arrs1: number[] = [1, 2, 3, 4, 5];
const arrs2: number[] = [6, 7, 8, 9, 10];

const gabung = [...arrs1, ...arrs2];

console.log(gabung);

// Spread di Object

const biodatas: { name?: string; age?: number } = {};

biodatas.name = "mikhael";
biodatas.age = 12;

console.log(biodatas);

const updatedBiodatas = {
  ...biodatas,
  age: 15,
};

console.log(updatedBiodatas);

const addBiodatas = {
  ...updatedBiodatas,
  address: "Bogor",
};

console.log(addBiodatas);
