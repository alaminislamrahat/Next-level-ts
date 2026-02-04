type RichPeopleVehicles = {
    bike: string;
    car : string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicles ? true : false;

type HasBike = CheckVehicle<"ship">