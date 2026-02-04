

type RichPeople = {
    car: string;
    cng: string;
    bike: string;
}

type MyVehicle = "car" | "bike" | "cng";

type MyVehicle2= keyof RichPeople;

const myVehicle: MyVehicle  = "bike" 