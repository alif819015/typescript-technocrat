{

// union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

// type FullStackDeveloper = 'frontendDeveloper' | 'expatDeveloper'

// type Developer = 'FrontendDeveloper' | 'FullStackDeveloper'

// const newDeveloper: FrontendDeveloper = 'fakibazDeveloper'

// type User = {
//     name: string;
//     email?: string;
//     gender: 'male' | 'female';
//     bloodGroup: 'O+' | 'A+' | 'AB+';
// }

// const user1: User = {
//     name: 'Mahmud',
//     gender: 'male',
//     bloodGroup: 'O+',
// }


// intersection types
type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}

type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const fullStackDeveloper : FullStackDeveloper = {
    skills: ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

}