function printLength<S extends { length: number }>(value: S): string {
  return `My Age ${value.length}`;
}

console.log(printLength({ length: 12 }));

interface Profile {
  name: string;
  address: string;
  noHp: number;
}

function printAddress<Bio extends Profile>(val: Bio): Profile {
  return val;
}

const datass: Profile = { name: "Mike", address: "Bogor", noHp: +896 };

console.log(datass);
