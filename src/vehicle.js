"use strict";
// Implement the Car class that implements the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);
// Call the start method
myCar.start(); // This will log "Car engine started" to the console
