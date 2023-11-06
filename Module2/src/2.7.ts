{
 // generic constraint with keyof operator

 type Vehicle = {
    bike: string;
    car: string;
    ship: string;
 }

 type Owner = 'bike'|'car'|'ship'; //manually

 type Owner2 = keyof Vehicle

//  const person1 : Owner2 = "bike"

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
};

const user = {
    name: "Mr.Alif",
    age: 27,
    address: 'kushtia',
};

const car = {
    model: 'Toyota 100',
    year: 200,
};

const result = getPropertyValue(car, 'model');



}
