/* Ez nem fog működni a node js-sel, mert nincs böngészőablak
window.addEventListener("load", init);

function init () {
    console.log("hello");
}*/ 

/*console.log("Hello world");

const ertek = 2;
const tomb = [];
const tomb2 = [1, 2, 3];
//tomb = tomb2;

for (let i = 0; i < 10; i++) {
    tomb[i].push(i);
    //ertek++;
    console.log("Cikuslon belül: " + tomb[i]);
}*/
//console.log("Cikluson kívül: " + ertek);

//Ha az element var, akkor a cikluson kívül is megvan.
//Ha let vagy const az element, akkor RefernceError: element is not defined a cikluson 

class Car {
    constructor (model, type, maxSpeed) {
        this.model = model;
        this.type = type;
        this.maxSpeed = maxSpeed;
    }

    getTimeNeeded(distance) {
        let when = distance / this.maxSpeed;
        return when;
    }
}

const peter = new Car("Toyota", "Auris", 180);
const mate = new Car("Mazda", "6", 200);
const enyem = new Car("Porsche", "Cayman", 250);

//console.log(enyem);
console.log(peter.getTimeNeeded(100));
console.log(mate.getTimeNeeded(100));
console.log(enyem.getTimeNeeded(100));


//Ugyan az, mint fent, csak class nélkül, sima functionnal 
const car1 = {
    model: "Toyota",
    type: "Auris",
    maxSpeed: 180
}
const car2 = {
    model: "Mazda",
    type: "6",
    maxSpeed: 200
}

function getTimeNeeded(distance, car) {
    let when = distance / car.maxSpeed;
    return when;
}

console.log(getTimeNeeded(100, car1));