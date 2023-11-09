{
    // instanceof guard
    class Animal {
        name: string;
        species: string;

        constructor(name:string, species:string){
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log('I am making sound');
        }
    }

// smart way te handle korar jonno chaile amra function bebohar korte pari

const isDog = (animal: Animal): animal is Dog =>{
    return animal instanceof Dog;
}

const isCat = (animal: Animal): animal is Cat =>{
    return animal instanceof Cat;
}

const getAnimal = (animal : Animal) => {
    if(isDog(animal)) {
        animal.makeBark();
    } else if(isCat(animal)) {
        animal.makeMew();
    }else{
        animal.makeSound();
    }
}

    // const getAnimal = (animal : Animal) => {
    //     if(animal instanceof Dog) {
    //         animal.makeBark();
    //     } else if(animal instanceof Cat) {
    //         animal.makeMew();
    //     }else{
    //         animal.makeSound();
    //     }
    // }

    class Dog extends Animal {
        constructor(name: string, species:string){
            super(name,species);
        }
        makeBark(){
            console.log("I am barking");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species:string){
            super(name,species);
        }
        makeMew(){
            console.log("I am Mewing");
        }
    }
    
const dog = new Dog("Dog Bhai", "dog");
const cat = new Cat("Cat bhai", "cat");

getAnimal(cat);

}