{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 19;

    if (age >= 18) {
        console.log("adult");
    }else{
        // console.log('not adult');
    }


    // ternary operator
    const isAdult = age >= 18 ? 'adult' : 'not Adult';
    // console.log({isAdult}); 

    // nullish coalescing operator
    // null / undefined --> decision making

const isAuthenticated = undefined; // null || undefined

const result1 = isAuthenticated ?? 'Guest'; // nullish
const result2 = isAuthenticated ? isAuthenticated : 'Guest'; // ternary
// console.log({result1}, {result2})


// optional chaining

type User = {
    name: string;
    address : {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string, 
    }
}

const user: User = {
    name: 'Mahmud',
    address: {
        city: 'Kushtia',
        road: 'Dhaka-Kushtia',
        presentAddress: 'Fullbary',
    }
}

const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address';
console.log({permanentAddress});

}