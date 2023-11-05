"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 19;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        // console.log('not adult');
    }
    // ternary operator
    const isAdult = age >= 18 ? 'adult' : 'not Adult';
    // console.log({isAdult}); 
    // nullish coalescing operator
    // null / undefined --> decision making
    const isAuthenticated = undefined; // null || undefined
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest'; // nullish
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'; // ternary
    const user = {
        name: 'Mahmud',
        address: {
            city: 'Kushtia',
            road: 'Dhaka-Kushtia',
            presentAddress: 'Fullbary',
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent Address';
    console.log({ permanentAddress });
}
