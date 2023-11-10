{

    // getter and setter
    class BankAccount {
        public readonly id : number;
        public name : string;
        private _balance : number;

        constructor(id: number, name: string, balance: number){
            this.id =id;
            this.name = name;
            this._balance = balance;
        }

        setDeposit(amount: number){
            this._balance = this.Balance + amount;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        // getter
        private getBalance() {
            return this._balance;
        }

        getHiddenMethod() {
            return this._balance;
        }
        }
        class StudentAccount extends BankAccount {
            test(){
                this.getHiddenMethod()
            }
        }

    }

const goribManusherAccount = new BankAccount (111, 'Mahmud', 20); 

goribManusherAccount.deposit = 80;

const myBalance = goribManusherAccount.Balance 
console.log(myBalance);








}