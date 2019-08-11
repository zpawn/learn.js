class Person {
  name: string;
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age)
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type)
  }
}

const person = new Person("Max", "max");
console.log(person);
console.log(person.name, person.username);
person.printAge();
// person.setType('Cool guy');

// Inheritance

class Max extends Person {
  constructor(username: string) {
    super('Max', 'max');
    this.age = 31;
    console.log(this.type)
  }
}

const max = new Max('max');
console.log(max);
