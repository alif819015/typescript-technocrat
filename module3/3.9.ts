{
    // Abstraction
    
    // idea
    interface Vehicle1 {
        startEngin(): void;
        stopEngin(): void;
        move(): void;
    } 

    // real implementation
    class Car1 implements Vehicle1 {
        startEngin(): void {
            console.log(`I am starting the car engine`);
        }

        stopEngin(): void {
            console.log(`I am stopping the car engine`);
        }

        move(): void {
            console.log(`I am moving the car`);
        }
        test(){
            console.log(`I am just testing`);
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngin();

abstract class Car2 {
   abstract startEngin(): void;

   abstract stopEngin(): void;

   abstract  move(): void;
    test(){
        console.log(`I am just testing`);
    }
}

class ToyotaCar extends Car2{
    startEngin(): void {
        console.log('I am starting the car engine');
    }
    stopEngin(): void {
        console.log('I am stopping the car');
    }
    move(): void {
        console.log('I am moving the car');
    }
}

// const hondaCar = new Car2();
// hondaCar.startEngin();
}