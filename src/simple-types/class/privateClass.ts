export class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Mikhael");

console.log(`Nama Saya : ${person.getName()}`);
