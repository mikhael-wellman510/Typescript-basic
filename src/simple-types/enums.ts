// Enum harus kasih value kalau di typescrip
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(`Status Code ${StatusCodes.Success}`);

enum CardinalDirection {
  NORTH = "North",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
}

console.log("Arah : ", CardinalDirection.NORTH);

enum ArahMataAngin {
  Timur,
  Selatan,
  Barat,
  Utara,
}

let arah = ArahMataAngin.Barat;
console.log("Arah : ", arah); // dia hasil nya index , harus di kasihh value lagi


