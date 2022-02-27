class Counter {
    constructor(counter){
        this.counter = counter;
    }

    increaseOne() {
        //Increments the initial value of the counter by one
        return this.counter += 1;
    }

    decreaseOne() {
        //Decrements the initial value of the counter by one
        return this.counter -= 1;
    }

    getValue() {
        //Return the value of the counter in a console.log
        return console.log(this.counter);
    }
}

//New Counter instance (starts at one)
let proof = new Counter(1);

proof.getValue();       // 1
proof.increaseOne();
proof.increaseOne();
proof.getValue();       // 3
proof.decreaseOne();
proof.decreaseOne();
proof.getValue();       // 1

