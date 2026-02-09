const user: { nama: string; usia: number } = {
  nama: "Denis",
  usia: 18,
};

let arr: number[] = [1, 2, 3, 4, 5];

let w: unknown = arr;

console.log("apa ini ? ", typeof w);

if (typeof w === "number") {
  console.log(`Number : ${w}`);
} else if (typeof w === "string") {
  console.log(`String : ${w}`);
} else if (typeof w === "boolean") {
  console.log(`Boolean : ${w}`);
} else if (Array.isArray(w)) {
  console.log("Array : ", w);
} else if (typeof w === "object") {
  console.log(`Object : ${JSON.stringify(w)}`);
  console.log("Object : ", w);
}
