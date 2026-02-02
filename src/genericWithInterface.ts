interface Developer <T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartwatch: T
}


interface NonBrandWatch {
    
    heartrate: string;
    stopwatch: boolean;

}


type AppleWatch = {
    heartrate: string;
    stopwatch: boolean;
    callSupport: boolean;
    calculator: boolean
}

const poorDeveloper: Developer<NonBrandWatch> = {
    name: "Rahat",
    salary: 20000,
    device: {
        brand: "Asus",
        model: "zenbook",
        releasedYear: "2021"
    },
    smartwatch: {
        heartrate: "200",
        stopwatch: true
    }

}
const richDeveloper: Developer<AppleWatch> = {
    name: "Al-amin",
    salary: 200000,
    device: {
        brand: "Mac",
        model: "macmini",
        releasedYear: "2023"
    },
    smartwatch: {
        heartrate: "200",
        stopwatch: true,
        calculator: true,
        callSupport: true
    }

}