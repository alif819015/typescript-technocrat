"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    const bros1 = ['Mahmud', 'Hasan', 'Alif'];
    const bros2 = ['Ritika', 'Islam', 'Rushi'];
    bros1.push(...bros2);
    const mentors = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan',
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid',
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Alif', 'Rima', 'Ekra', 'Elma');
}
