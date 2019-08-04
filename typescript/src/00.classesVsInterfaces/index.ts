interface IPizza {
  name: string,
  toppings: string[],
}

class Pizza {
  constructor (
    public name: string,
    public toppings: string[]
  ) {}
}

class PizzaMaker {
  static create (event: Pizza) {
    return new Pizza (event.name, event.toppings)
  }
}

const pizza = PizzaMaker.create({
  name: 'Infernio',
  toppings: ['cheese', 'pepper'],
});

console.log(pizza);
