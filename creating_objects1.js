// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
//
// -Each vehicle should have a makeNoise method
// -Using the constructor, create a Bike
// -Redefine the Bike’s makeNoise method to print “ring ring!”
// -Create a Sedan
// -Redefine the Sedan’s makeNoise method to print "Honk Honk!”"
// -Using the constructor, create a Bus
// -Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, num_wheels, num_passengers) {
  var vehicle = {};     // the object that will eventually be returned

// Addition of properties to vehicle.
  vehicle.name = name;
  vehicle.num_wheels = num_wheels;
  vehicle.num_passengers = num_passengers;

// Addition of methods to vehicle
  vehicle.makeNoise = function(noise) {
    console.log("I make the noise " + noise);
  }

  return vehicle;
}

var Bike = VehicleConstructor("bike", 2, 1);
Bike.makeNoise("ring ring!");

var Sedan = VehicleConstructor("sedan", 4, 4);
Sedan.makeNoise = function() {
  console.log("I make the noise Honk Honk");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("bus", 4, 5);
Bus.addPassengers = function(new_passengers){
    Bus.num_passengers += new_passengers
}
console.log(Bus.name);
console.log(Bus.num_wheels);
console.log(Bus.num_passengers);
Bus.addPassengers(10);
console.log(Bus.num_passengers);
