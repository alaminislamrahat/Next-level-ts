//? union |

type UserRole = "admin" | "user"

const getDashboard = (role : UserRole) => {

    if(role === "admin"){
        return "admin Dashboard"
    }
    else if(role === "user"){
        return "user Dashboard"
    }
    else{
        return "guest Dashboard"
    }

}

console.log(getDashboard("admin"))

//! intersection &

type Employee = {
    id: number,
    name : string,
    phoneNo: string
}

type Maneger = {
    designation : string,
    teamsize : number
}

type EmployeeManager = Employee & Maneger;

const rahat: EmployeeManager = {
    id:123,
    name: "Rahat",
    designation: "Web Developer",
    phoneNo : "01575231473",
    teamsize : 3
}