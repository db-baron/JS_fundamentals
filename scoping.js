// We declare a private variable self that hangs on to the Ninja object constructed when we call var
// Speros = new Ninja('Speros', 29, 'MBA');. To access the constructed object from within private methods
// we can then refer to 'self'.

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this; // HERE WE HAVE DECLARED SELF EQUAL TO THE NEW OBJECT WE CREATE WITH NEW
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
    console.log(self);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();
