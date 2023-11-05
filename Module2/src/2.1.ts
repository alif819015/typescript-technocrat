{

// type assertion

let anything: any;
anything = "Next Level Web Developer";

anything  = 345;
(anything as number)
// (anything as string).


const kgToGm = (value:string | number) : string | number | undefined => {
if(typeof value === 'string'){
const convertedValue = parseFloat(value)*1000;
return `The converted Value is ${convertedValue}`
     }
     if(typeof value === "number"){
        return value * 1000;
     }
}

const result1 = kgToGm(1000) as number
const result2 = kgToGm('1000')

type CustomError = {
    message: string
}

try {

}catch(error){
    console.log((error as CustomError).message)
}

console.log(result1)
}