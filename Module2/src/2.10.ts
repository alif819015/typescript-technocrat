{

    //  mapped types

    const arrOfNumbers: number[] = [1,2,3,4,5,6,7];
    const arrOfNumbers1: string[] = ['1','2','3','4','5'];

    const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());
    console.log(arrOfStrings);


type AreaNumber = {
    height: number;
    width: number;
};

type Height = AreaNumber ['height'] // look Up type

// type AreaString = {
//     height: string;
//     width: string;
// };

// T => {height: string; width: number}
// key => T["width"]
type AreaString <T> = {
    [key in keyof T] : T[key];
};

const area1: AreaString<{height: string; width: number}> = {
height: '100',
width: 50,
};






}