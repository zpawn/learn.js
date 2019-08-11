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
