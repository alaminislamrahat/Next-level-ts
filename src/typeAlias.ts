
type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: "male" | "female",
    contactNo: string,
    adress: {
        division: string,
        city: string
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: "Md. Al-Amin Islam",
        lastName: "Rahat"
    },

    gender: "male",
    contactNo: "01575231473",
    adress: {
        division: "Ranpur",
        city: "Rangpur"
    }
}
const user2: User = {
    id: 1234,
    name: {
        firstName: "Md. code Islam",
        lastName: "Rahat"
    },

    gender: "male",
    contactNo: "01575231473",
    adress: {
        division: "Ranpur",
        city: "Rangpur"
    }
}



//function type alias

type addFunc = (num1: number, num2: number) => number;

const add : addFunc = (num1, num2)=> num1 + num2;

console.log(add(1, 2))