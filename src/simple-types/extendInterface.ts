interface Musik {
  genre: string;
  namaLagu?: string;
}

interface Band extends Musik {
  vokalis: string;
}

const band: Band = {
  vokalis: "Deni",
  genre: "Rock",
  namaLagu: "Lets Sing",
};

console.log("Ïsi Band : ", band);

// Union

type Status = "success" | "error";

const hasil: Status = "success";

console.log("ini hasil : ", hasil);
