export class Person {
  name?: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): string {
    return "Hi " + this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  salary?: number;

  constructor(nama: string, salary: number) {
    super(nama);
    this.salary = salary;
  }

  public showSallary(): string {
    const greet = this.greet();
    return `${greet}, your Salary : ${this.salary} `;
  }
}

const employe = new Employee("Mikhael", 13000);
console.log(employe.showSallary());
