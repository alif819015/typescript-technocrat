{

// spread operator
// rest operator
// destructuring

// learn spread operator
const bros1: string [] = ['Mahmud', 'Hasan', 'Alif'];

const bros2: string [] = ['Ritika', 'Islam', 'Rushi'];

bros1.push(...bros2)


const mentors = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid',
}

const mentorList = {
    ...mentors,
    ...mentors2,
}


// learn rest operator

const greetFriends = (...friends: string[]) => {
friends.forEach((friend: string) => console.log(`Hi ${friend}`))
};
greetFriends('Alif', 'Rima', 'Ekra', 'Elma');
}