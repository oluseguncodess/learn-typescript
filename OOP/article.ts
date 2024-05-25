// Create an banking app
class BankAccount {
    private accountNumber: number
    private bank: string
    private balance: number

    constructor(accountNumber: number, initialBalance: number, bank: string) {
        this.accountNumber = accountNumber
        this.balance = initialBalance
        this.bank = bank
    }

    getAccount() : number{
        return this.accountNumber;
    }

    getBank() : string {
        return this.bank;
    }

    getBalance() : number{
        return this.balance;
    }

    withdraw(amount: number) {
        if(this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("We broke!");
        }
    }

    deposit(money : number) {
        this.balance += money;
        console.log(`Your deposit of ${money} is successful. Your new balance is ${this.balance}`);
    }
}

const femiAccount = new BankAccount(2139449217, 4000, "UBA");
femiAccount.deposit(5000);
// console.log(femiAccount.getBalance());
femiAccount.withdraw(8000);
// console.log(femiAccount.getBalance());
femiAccount.withdraw(5000);






