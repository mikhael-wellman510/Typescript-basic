export let data = [
  { nama: "mike", age: 12 },
  { nama: "denis", age: 45 },
];

const res = data.map((val) => ({
  nama: val.nama,
  usia: val.age < 20 ? "muda" : "tua",
}));

console.log(res);
