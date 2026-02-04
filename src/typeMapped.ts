

const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfNum: number[] = [1, 2, 3];

const arrayOfStringUsingMap : string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap)


type AreaOfNum = {
    height: number;
    width: number;
}
type AreaOfString = {
   [key in keyof AreaOfNum] : boolean
}


type Area<T> = {
    [key in keyof T] : T[key]
}


const area1 : Area<{height: string, width: number}> = {
 height: "rahat",
 width: 22 
}