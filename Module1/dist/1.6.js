"use strict";
{
    // Learning function
    // Normal Function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2, 2);
    // Arrow Function
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: 'Mahmud',
        balance: 0,
        addBalance(balance) {
            // return this.balance + balance;
            return `My new Balance is: ${this.balance + balance}`;
        },
    };
    const arr = [1, 2, 3, 10];
    const newArray = arr.map((elem) => elem * elem);
}
