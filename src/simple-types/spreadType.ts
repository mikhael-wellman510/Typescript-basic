type UsersPayload = {
  name?: string;
  age?: number;
  address?: string;
};

const objBio: { name?: string; age?: number } = {};

objBio.name = "mikhael";
objBio.age = 12;

// ini updated dan tambah isi payload
const res11: UsersPayload = {
  ...objBio,
  address: "Bogor",
  age: 15,
};

console.log(res11);

// ============ spread di params call nya =========
function sum(a: number, b: number, c: number): number {
  return a + b + c;
}

const angka: [number, number, number] = [1, 2, 3];

const resHasil: number = sum(...angka);
console.log(resHasil);

function sum2(...angka: number[]): number {
  return angka.reduce((a, b) => a + b);
}

console.log(sum2(2, 3, 4));
