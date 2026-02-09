type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log("Mobil : ", car);
console.log("mobil Tahun : ", car.type);

interface Rectangle {
  height: number;
  width: number;
}

const segitiga: Rectangle = {
  height: 30,
  width: 20,
};

console.log("Segita : ", segitiga.width * segitiga.height);
