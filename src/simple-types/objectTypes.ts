const mobil: { type: string; model: string; year: number } = {
  type: "Honda",
  model: "crv",
  year: 10,
};

console.log(mobil);
mobil.year = 20;
console.log(mobil);

const motor: { tipe: string; tahun?: number } = {
  tipe: "Bebek",
};

console.log("ini adalah : ", motor);

const nameAge: { [index: string]: number } = {};
nameAge.umur = 12;
nameAge.anakKe = 1;

console.log(nameAge);

let agee: number = nameAge.umur;

console.log("umur : ", agee);
