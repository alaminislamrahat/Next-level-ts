//arrow function, normal fuction
function addNomrmal( num1: number, num2: number): number{
    return num1 + num2;
}

const addArrow = (num1: number, num2: number) : number => num1 + num2;

addNomrmal(2, 2)

addArrow(2, 2)


// obj => function => method

const poorUser = {
    name : "Rahat",
    balance: 0,
    addBallance(value: number): number{
        return this.balance + value;
    }
}



//call back 

const arr: number[] = [1, 2, 3];
const sqrArray = arr.map((element: number) : number => element * element)