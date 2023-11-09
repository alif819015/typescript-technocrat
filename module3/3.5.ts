{

    // access modifiers
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
        addDeposit(amount: number){
            this._balance = this._balance + amount
        }

        checkBalance(){
            return this._balance;
        }

        class StudentAccount extends BankAccount{
            test(){
                this._balance
            }
        }
    }

const goribManusherAccount = new BankAccount (111, 'Mahmud', 20);
// goribManusherAccount.id = 22
goribManusherAccount.addDeposit(30)
const myBalance = goribManusherAccount.checkBalance()
console.log(myBalance);








}