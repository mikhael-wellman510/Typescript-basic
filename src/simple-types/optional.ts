function pertambahan(a: number, b: number, c?: number): number {
  return a + b + (c || 1);
}

console.log(pertambahan(1, 2));

function pertambahan2(a: number, b?: number): number {
  return a + (b || 0);
}

console.log(pertambahan2(1));
