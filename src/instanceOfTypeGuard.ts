
class Person {
    name: string;

    constructor(name: string){
        this.name = name
    }

    getSleep(value: number){
        console.log(`${this.name} sleep ${value} our`)
    }
}


class Student extends Person{
    constructor(name:string){
       super(name)
    }

    getStudy(value: number){
        console.log(`${this.name} study ${value} hour`)
    }
}



class Teacher extends Person{
    constructor(name: string){
        super(name)
    }

    takeClass(value: number){
        console.log(`${this.name} take class ${value} hour`)
    }
}


//? function guard

const isStudent = (user: Person) => {
    return user instanceof Student;
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}
const isPerson = (user: Person) => {
    return user instanceof Person;
}


const getUserInfo =(user: Person) => {
    if(isTeacher(user)){
        user.takeClass(10)
    }
    else if(isStudent(user)){
        user.getStudy(5)
    }
    else{
        user.getSleep(8)
    }
}


const student1 = new Student("Mr Student")
const teacher1 = new Teacher("Mr Teacher")

getUserInfo(student1)