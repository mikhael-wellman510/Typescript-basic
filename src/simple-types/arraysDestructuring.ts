export let data: [number, string[], string, boolean];

data = [12, ["mikhael", "denis"], "Biodata", true];

console.log("data : ", data);

// ================= ooo ===============
const destruct: [x: string, y: number] = ["nomor 12", 12];
const [x, y] = destruct;

console.log(x);
console.log(y);

// =================== ooo ============
let cek: [a: string, b: number];
cek = ["tes", 12];
const [a, b] = cek;
console.log("hasil : ", a);
