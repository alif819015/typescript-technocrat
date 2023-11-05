"use strict";
{
    // destructuring
    // object destructuring
    const user = {
        id: 234,
        name: {
            firstName: 'Mahmud',
            meddleName: 'Hasan',
            lastName: 'Alif',
        },
        contactNo: '017545654',
        address: 'Kushtia',
    };
    const { address, name: { lastName, firstName }, contactNo: PhoneNumber } = user;
}
// array destructuring
const myFriend = ['Mahmud', 'Hasan', 'Alif', 'Rima', 'Ekra'];
const [, , MyName, ...rest] = myFriend;
