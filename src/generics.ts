// dynamically generalize

type GenericArray<T> = Array<T>

// const friends: string[] = ["Rahat", "Shahadat", "Tufan"];
const friends: GenericArray<string> = ["Rahat", "Shahadat", "Tufan"];

// const rollNumber : number[] = [1, 2, 3, 4];
const rollNumber : GenericArray<number>  = [1, 2, 3, 4];

// const isEligibleList : boolean[] = [true, false, true];
const isEligibleList : GenericArray<boolean>= [true, false, true];


const userList: GenericArray<{name: string, age: number}> = [
    {
        name: "Rahat",
        age: 24
    },
    {
        name: "Shahadat",
        age: 22
    }
]

type Coordinates<X, Y> = [X, Y]

const coordinates1: Coordinates<number, number> = [20, 20]
const coordinates2: Coordinates<string, string> = ["20", "20"]
