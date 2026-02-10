class BackAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance(balance: number){
       return this.userBalance += balance;
    }

}


const rahat = new BackAccount(111, "Rahat", 100)

console.log(rahat.addBalance(50))