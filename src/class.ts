// oop class

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.sound = sound;
        this.species = species;
    }

    makeSound(){
        console.log(`${this.name} making sound : ${this.sound}`)
    }
}


//Parameter Properties
// class Animal {
   

//     constructor(public name: string, public species: string, public sound: string) {
      
//     }

//     makeSound(){
//         console.log(`${this.name} making sound : ${this.sound}`)
//     }
// }

const dog = new Animal("Dogesh", "Dog", "Khew" );

dog.makeSound()