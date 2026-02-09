// function loopForever(): never {
//   while (true) {
//     console.log("Jalan Terus");
//   }
// }

// loopForever();

const loops = (a: number): never => {
  while (true) {
    console.log("Jalan terus");
  }
};

loops(12);
