// Reference Type --> Object

const user:{
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Mahmud',
    middleName: 'Hasan',
    lastName: 'Alif'
}

const user1:{
    readonly company: string;
    profession: 'Student';
    study: string;
    firstName: string;
    middleName?: string;
    lastName: string;
} = {
    company: 'Programming Hero',
    profession: 'Student',
    study: 'BSC',
    firstName: 'Mahmud',
    lastName: 'Hasan'
}

// user1.company = 'PH' // can't update
// user1.profession = 'St' // can't update
user1.study = 'MSC'

const users:{
    profession: 'House Wife'; // type --> literal types
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    profession: 'House Wife',
    firstName: 'Rima',
    lastName: 'Khatun',
    isMarried: true,
}