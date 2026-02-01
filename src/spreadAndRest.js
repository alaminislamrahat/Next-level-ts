// spread oparator
var friends = ["rahim", "karim"];
var schoolFriends = ["pintu", "chintu", "bulbul"];
var collegeFriends = ["Shahadat", "Rahat", "Hadi"];
friends.push.apply(friends, friends);
console.log(friends);
