// string
let myName: string = 'Max';
// myName = 28

// number
let myAge: number = 27
// myAge = 'String'

// boolean
let hasHobbies: boolean = false
// hasHobbies = 1

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ['Cooking', 'Sports'];
hobbies[0] = [100];
// hobbies = 100;

// tuples
let adress: [string, number] = ['SuperStreet', 99];

// enum
enum Color {
  Gray ,
  Green = 100,
  Blue,
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// function
function getName(): string {
  return myName
}

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2
}

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
myMultiply(2, 10);

// object
let userData: { name: string, age: number } = {
  name: 'Max',
  age: 27,
};
// userData = {
//   a: 'Hello',
//   b: 22,
// }

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.14, 10],
  output: function(all: boolean) {
    return this.data
  }
};

// type alias
type Complex = {
  data: number[],
  output: (all: boolean) => number[],
};

let complex2: Complex = {
  data: [100, 3.14, 10],
  output: function(all: boolean) {
    return this.data
  }
};

// union type
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = true;

// check types
let finalValue = 30;

if (typeof finalValue == 'number') {
  console.log('the final value is number')
}

// never

function neverReturns(): never {
  throw new Error('An error!')
}

// Nullable type
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeNull: number | null = null;
canThisBeNull = 12;
