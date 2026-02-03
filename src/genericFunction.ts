

//! NOrmal types of similar array

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];


const createArrayWithObject = (value: {id:number, name:string}) => [value];

//? Generic type one array

const createArrayWithGeneric = <T>(value: T) => [value]



const arrString = createArrayWithGeneric('Rahat');
const arrNumber = createArrayWithGeneric(123);
const arrObject = createArrayWithGeneric({name: "rahat", id: 12})


const createArrayTuppleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]

console.log(createArrayTuppleWithGeneric("200",{name: "Rahat"}))