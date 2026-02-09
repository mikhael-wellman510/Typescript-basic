let y: undefined = undefined;
let x: null = null;
console.log("Hasil y : ", y);
console.log("Hasil x : ", x);

// Contoh undefined

let data: string;

const obj: { nama: string; usia: number } = {
  nama: "mike",
  usia: 12,
};
console.log("cek : ", obj.alamat); // ini akan undefined , karena object nya ga ada atau data nya belum di isi

let arrData: number[] = [1, 2, 3, 4];

console.log(arrData[10]);
