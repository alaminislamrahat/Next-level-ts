class Parent {
    name: string;
    age: number;
    adress: string;

    constructor(name: string, age: number, adress: string){
        this.name = name;
        this.age = age;
        this.adress = adress;
    }

    getSleep(numberOfHour: number){
        console.log(`${this.name} ${numberOfHour} ghonta ghumay`)
    }
}


class Student extends Parent {
    designation: string;
    constructor(name: string, age: number, adress: string, designation: string){
        super(name, age, adress);
        this.designation = designation;
    }
    
}

const student1 = new Student("Rahat", 24, "nilkantho", "Student")

student1