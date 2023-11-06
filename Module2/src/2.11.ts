{
    // utility types
    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contractNumber: string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>

    // Omit
    type ContractInfo = Omit<Person, 'name' | 'age'>

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: 'Alif',
        age: 27,
        contractNumber: '016',
    };

    person1.name = 'Mahmud'

    // Record
    // type MyObj ={
    //     a: string;
    //     b: string;
    // };

    type MyObj = Record<string,number>
    const EmptyObj : Record<string,unknown> = {}

    const obj1:MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
    }


}