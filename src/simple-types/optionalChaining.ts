const bio: {
  name: string;
  address: { city: string; postCode: number };
} = {
  name: "Mikhael",
  address: {
    city: "Bogor",
    postCode: 12121,
  },
};

let res: string = bio?.addres?.kota;

console.log("Hasil : ", res);
