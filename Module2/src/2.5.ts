{
    // function with generics

    const createArray = (param: string) : string[] => {
        return [param]
    };

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    };

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    interface User {id: number, name: string}

    const resGenericObj = createArrayWithGeneric<User>({
        id: 2000,
        name: 'Mahmud',
    })


    const createArrayWithTuple = <T,Q>(param1: T, param2: Q) : [T,Q] => {
        return [param1, param2];
    };

    const res10 = createArrayWithTuple<string,number>('Bangladesh', 200)
    
    const res11 = createArrayWithTuple<string, {name: string}>('Bangladesh', {name: 'kushtia'});

    
    const addCourseToStudent = <T>( student : T )=>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({
        name: 'Mr.X', 
        email: 'x@gmail.com', 
        developer: "Next Level"
    })

    const student2 = addCourseToStudent({
        name: 'Mr.Y', 
        email: 'y@gmail.com', 
        developer: "Poor Developer"
    })
}