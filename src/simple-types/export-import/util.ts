export function tambah(x: number, y: number): number {
  return x + y;
}

export const perkalian = (x: number, b: number): number => {
  return x * b;
};

export const perkalianVoid = (x: number, y: number): void => {
  console.log(`Hasil kali dari : ${x} x ${y} = ${x * y}`);
};
