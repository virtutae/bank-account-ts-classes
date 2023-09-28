//Kata can be found here:
//https://www.notion.so/weareacademy/Bank-Account-etc-class-syntax-practice-cfd795ee3cdc4f509fd084b48fdf8eaf


class Account {
    id: number;
    balance: number;

    constructor(id: number, balance: number) {
        this.id = id;
        this.balance = balance;
    }

    deposit()

}






const myAccount = new Account(123, 100);//id: 123, starting balance: 100
const yourAccount = new Account(42, 999); //id: 42, starting balance: 999

myAccount.deposit(20);

yourAccount.withdraw(900);

console.log(myAccount.toString()); //"Account id: 123, balance: 120"
console.log(yourAccount.toString()); //"Account id: 42, balance 99"


