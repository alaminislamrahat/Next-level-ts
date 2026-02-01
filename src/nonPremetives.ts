let arr: (string | number)[] = [1, 2, 3, "hello", "world"];
console.log(arr);

let destination: [string, string, number] = ["Paris", "London", 100];

const user: {
    name: string;
    age: number;
    company : "legacy Grid"; // literal type
    isMarried?: boolean // optional property
} = {
    name: "Alice",
    age: 30,
    company: "legacy Grid",
    isMarried: true
};
console.log(user);