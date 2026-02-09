import { tambah, perkalian, perkalianVoid } from "./util";
import pembagian from "./utils2";
import pertambahanAngka from "./utils3";

const res1: number = tambah(12, 10);
console.log("hasil : ", res1);

const res2: number = perkalian(4, 5);
console.log("kali : ", res2);

// ini void
perkalianVoid(12, 12);

const res3: number = pembagian(10, 3);
console.log(res3);

const res4: number = pertambahanAngka(2, 3);
console.log(res4);
