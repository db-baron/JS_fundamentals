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
  var distance_travelled = 0;
  var self = this;
  function update_distance_travelled (){
    distance_travelled += self.speed;
    console.log(distance_travelled);
  }

// Public vars and methods
  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passengers = num_passengers;
  this.speed = speed;

  this.makeNoise = function(noise) {
    var noise = noise;
    console.log("I make the noise " + noise);
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
console.log(car.speed);
