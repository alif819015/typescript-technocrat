{

    // getter and setter
    class BankAccount {
        public readonly id : number;
        public name : string;
        // private _balance : number;
        protected _balance : number;

        constructor(id: number, name: string, balance: number){
            this.id =id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number){
            this._balance = this.Balance + amount;
        }

        // addDeposit(amount: number){
        //     this._balance = this._balance + amount
        // }

        // getter
        get Balance() {
            return this._balance;
        }

        // checkBalance(){
        //     return this._balance;
        // }

    }

const goribManusherAccount = new BankAccount (111, 'Mahmud', 20); 
// goribManusherAccount.deposit = 22
// goribManusherAccount.addDeposit(30) // function call korte hosse

goribManusherAccount.deposit = 80;

// const myBalance = goribManusherAccount.checkBalance() // function call korte hosse

const myBalance = goribManusherAccount.Balance // propertymer moto kore
console.log(myBalance);








}