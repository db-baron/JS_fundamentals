// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
//
// -Each vehicle should have a makeNoise method
// -Using the constructor, create a Bike
// -Redefine the Bike’s makeNoise method to print “ring ring!”
// -Create a Sedan
// -Redefine the Sedan’s makeNoise method to print "Honk Honk!”"
// -Using the constructor, create a Bus
// -Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, num_wheels, num_passengers, speed) {
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  // Private vars and methods
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";  // For generating a random VIN
  var distance_travelled = 0;
  var self = this;
  function update_distance_travelled (){
    distance_travelled += self.speed;
    console.log(distance_travelled);
  }
  function createVin(){
    var vin = '';
    for (var i = 0; i < 10; i++ ){
      // Use Math.floor and Math.random to generate random index to access character from char string
      vin += chars[Math.floor(Math.random()*35)];
    //   console.log(vin);
    }
    return vin;
  }

  // Public vars and methods
  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passengers = num_passengers;
  this.speed = speed;
  // Invoke createVin to generate random vin number
  this.vin = createVin();

  this.makeNoise = function(noise) {
    var noise = noise || "Honk";
    console.log("I make the noise: " + noise);
    return this;
  }
  this.move = function() {
    update_distance_travelled();
    this.makeNoise();
  }
  this.checkMiles = function() {
    console.log(distance_travelled);
  }
}

var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.checkMiles();
console.log("car speed is", car.speed, "mph");


// Part 2: make the following modifications:
// Have the Vehicle constructor also take in a “speed” Store the speed as an attribute.
// Create a private variable called distance_travelled that starts at 0.
// Create a private method called updateDistanceTravelled that increments distance traveled by speed.
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise.
// Add a method called checkMiles that console.logs the distance_travelled

// Part 3: Now modify your code to use Prototype and the recommended way of OOP/
// You may have to change some private variables/methods to attributes to make all of the functionality work.
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates.
