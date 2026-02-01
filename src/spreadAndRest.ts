// spread oparator

const friends = ["rahim", "karim"];

const schoolFriends = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Shahadat", "Rahat", "Hadi"]


friends.push(...schoolFriends)
// console.log(friends);


const user  = {
    name: "Rahat",
    Phone: "01575231473"
};

const otherInfo = {
    hobby: "Filming",
    Proffession : "Developer"
}

const userInfo = {...user, ...otherInfo}
// console.log(userInfo)

const sendInvite = (...friends:string[]) => {

    friends.forEach((friend:string) => console.log(`sent invite to : ${friend}`))
    
}

sendInvite("shahadat", "rahat", "mushfiq", "Nahid")