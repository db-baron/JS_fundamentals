function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned

// Addition of properties to ninja.
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;

// Addition of methods to ninja
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }

  return ninja;
}


// Create the Ninja "Andrew"
// var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
// Andrew.introduce();
// console.log("Previous occupation was:", Andrew.prevOccupation);
//
// // Create the Ninja "Michael"
// var Michael = NinjaConstructor("Michael", 34, "Founder");
//
//  // Redefine the introduce method for a particular "Instance" or Object
// Michael.introduce = function() {
//   console.log("I am the Sensei!")
// }
// Michael.introduce();


//////////////////////////////
// Now while using 'this' and 'new' (will make previous calls of the NinjaConstructor malfunction)
function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
console.log(dylan.introduce());
var nikki = NinjaConstructor('Nikki','Historian');
console.log(nikki.introduce());
