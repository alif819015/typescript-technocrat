{
    // type alice

    type Student = {
        name: string;
        age: number;
        contractNumber?: string;
        gender: string;
        address: string;
    }

    const student: Student = {
        name: 'Mahmud',
        age: 27,
        contractNumber: '017545665',
        gender: "Male",
        address: 'Kushtia'
    };

    const student2: Student = {
        name: 'Hasan',
        age: 27,
        gender: "Male",
        address: 'Kushtia'
    };

    type UserName = string
    type IsAdmin = boolean

    const userName : UserName = 'Mahmud'
    const isAdmin : IsAdmin = true

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;

}