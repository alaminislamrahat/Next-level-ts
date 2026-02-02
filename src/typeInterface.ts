//interface : object type data: array, object, function

interface Iuser {
    name: string;
    age: number
}


interface IuserwithRole extends Iuser {
    role : "user" | "admin"
}


const user : IuserwithRole = {
    name: "rahat",
    age: 25,
    role : "admin"
}

// function

type Add = (num1: number, num2: number) => number;

interface Iadd {
    (num1: number, num2: number) : number
}

const add: Iadd = (num1, num2) => num1 + num2;



interface Ifriends {
    [index: number] : string;
}

const friends: Ifriends = ["A", "B", "C"]