import { Profile } from "./class/interface";
import { add1, add2, add3, add4 } from "./class/sampleData";

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

let data: Profile[] = [];
data.push(add1);
data.push(add2);
data.push(add3);

console.log(data);

data = data.map((val) => (val.id === 3 ? { ...val, ...add4 } : val));

console.log(" finish :: ->> ", data);

const d = { nama: "mike", age: 12 };
const a = { nama: "mikess", age: 13 };

const res = { ...d, a };
console.log(res);
