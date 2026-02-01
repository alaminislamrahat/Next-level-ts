const user = {
    id: 123,
    name: {
        firstName : "Al-Amin",
        middleName: "Islam",
        lastName: "Rahat"
    },
    gender: "male"
}

const {gender, name: {firstName}} = user;

console.log(firstName)