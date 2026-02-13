function creatPair<S, N>(name: S, age: N): [S, N] {
  return [name, age];
}

export const data = creatPair<string, number>("Mikhael", 22);
console.log(data);

const creatPair2 = <S, N>(name: S, age: N): [S, N] => {
  return [name, age];
};

console.log(creatPair2("Mikhael", 2));

const sayHello = <S, N>(name: S, age: N): string => {
  return `Hello my name is ${name} , and my age : ${age}`;
};

console.log(sayHello("mike", 20));
