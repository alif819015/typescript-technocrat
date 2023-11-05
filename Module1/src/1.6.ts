{
// Learning function

// Normal Function
function add(num1 : number, num2 : number = 10) : number{
    return num1 + num2;
}

add(2, 2)

// Arrow Function
const addArrow = (num1:number, num2:number):number => num1+num2

// object --> function --> method

const poorUser = {
    name: 'Mahmud',
    balance: 0,
    addBalance(balance: number): string {
        // return this.balance + balance;
        return `My new Balance is: ${this.balance + balance}`;
    },
};

const arr: number[] = [1, 2, 3, 10];

const newArray: number[] = arr.map((elem: number): number => elem*elem);

}