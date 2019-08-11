type TBankAccount = {
  money: number,
  deposit: (val: number) => void
};

type TMyself = {
  name: string,
  bankAccount: TBankAccount,
  hobbies: string[]
}

let bankAccount: TBankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value
  },
};

let myself: TMyself = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Cooking', 'Sports']
};

myself.bankAccount.deposit(3000);

console.log(myself);
