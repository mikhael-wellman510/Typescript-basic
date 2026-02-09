let biodataMhs: { name?: string; umur?: number; alamat?: string } = {};

biodataMhs.name = "Mikhael";
biodataMhs.umur = 12;
// biodataMhs.alamat = "bogor";

console.log(biodataMhs.alamat ?? "Kosong");
