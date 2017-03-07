// Create a function that takes in the parameter “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.
function personConstructor(name) {
   // Create a JS object for the assignment
   var person = {
       name: name,
       distance_travelled: 0,
       say_something: function(phrase) {
           return console.log(this.name + " says " + phrase );
       },
       walk: function() {
           this.distance_travelled += 3;
           return console.log(this.name + " is walking the distance" + this.distance_travelled);
       },
       run: function() {
           this.distance_travelled += 10;
           return console.log(this.name + " is running the distance " + this.distance_travelled);
       },
       crawl: function() {
           this.distance_travelled += 1;
           return console.log(this.name + " is crawling the distance " + this.distance_travelled);
       }
   };
   return person;
}

var my_person = personConstructor("David");
console.log(my_person);
my_person.say_something("Yaaaaaah!");

//Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level.
//Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).
function ninjaConstructor(name){
    var ninja = {
        name : name,
        belt : 1,
        levelUp: function(){
            this.belt += 1;
        }
    }
    return ninja;
}

var my_ninja = ninjaConstructor("Dan");
console.log(my_ninja);
my_ninja.levelUp();
console.log(my_ninja);
