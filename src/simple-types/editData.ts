interface People {
  id?: number;
  name?: string;
  address?: string;
}

const p1: People = {
  id: 1,
  name: "mike",
  address: "Bogor",
};

const p2: People = {
  id: 2,
  name: "Denis",
  address: "Depok",
};

const p3: People = {
  id: 3,
  name: "Anji",
  address: "Tangerang",
};
const p4: People = {
  id: 1,
  name: "Mikhael Wellman",
  address: "Bogor Kota",
};
export const data: People[] = [];
data.push(p1, p2, p3);

console.log(data);

const newData = data.map((val) => {
  return val.id === 1 ? { ...val, ...p4 } : val;
});

console.log("Hasil new data ", newData);
