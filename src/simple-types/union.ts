const statuss = (status: string | number) => {
  console.log(`Status ${status}`);
};

statuss("OK");

// Jadi union itu , tipe data nya dinamis , tapi tetap di tentukan
let id: number | string;

id = 12;

console.log(id);

id = "Dua";

console.log(id);
