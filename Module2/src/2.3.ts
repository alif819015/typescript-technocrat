{
// generic type

// type GenericArray = Array<number>
// type GenericArray = Array<string>
// type GenericArray = Array<boolean>
type GenericArray<T> = Array<T>

// const RoleNumbers: number[] = [3, 6, 8];
// const RoleNumbers: GenericArray = [3, 6, 8];
const roleNumbers: GenericArray<number> = [3, 6, 8];

// const mentors: string[] = ['Mahmud', 'Hasan', 'Alif'];
// const mentors: GenericArray = ['Mahmud', 'Hasan', 'Alif'];
const mentors: GenericArray<string> = ['Mahmud', 'Hasan', 'Alif'];

// const boolArray: boolean[] = [true, false, true];
// const boolArray: GenericArray = [true, false, true];
const boolArray: GenericArray<boolean> = [true, false, true];

// type User = {
//     name: string;
//     age: number;
// }
interface User {
    name: string;
    age: number;
}
const user: GenericArray<User> = [
{
    name: 'Mahmud',
    age: 27,
},
{
    name: 'Rushi',
    age: 25,
},
]


const add = (x: number, y: number) => x + y;
add(20,40);


// generic tuple

type GenericTuple <X,Y>= [X , Y]

const man: GenericTuple<string,string> = ['Alif', 'Rushi']

const UserId: GenericTuple < number, {name: string, email: string}> = [ 1234, {name: 'Alif', email: 'alif@gmail.com'}]


}