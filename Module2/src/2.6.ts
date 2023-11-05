{
// constraints

    const addCourseToStudent = <T extends {id: number, name: string, email: string}>( student : T )=>{
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({id: 234, name: 'alif', email: 'x@gmail.com'})

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        developer: string;
    }>({
        id: 234,
        name: 'Mr.X', 
        email: 'x@gmail.com', 
        developer: "Next Level"
    })

    const student2 = addCourseToStudent({
       id: 678,
        name: 'Mr.Y', 
        email: 'y@gmail.com', 
        developer: "Poor Developer"
    })
}