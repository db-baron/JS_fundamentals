// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function looper(x, y){
    var sum =0;
    for (var x = x; x <= y; x++){
        sum+=x;
    }
    console.log(sum);
}

// Write a loop that will go through an array, find the minimum value, and then return it.
function minFinder(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

// Write a loop that will go through an array, find the average of all of the values, and then return it
function ave(arr){
    var sum =0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return (sum/arr.length)
}
///////////////////////////////////////////
// Rewrite these 3 as anonymous functions assigned to variables.
var looper_var = function(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
};

var minFinder_var = function minFinder(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
};

var ave_var = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

////////////////////////////////////////
// Rewrite these as methods of an object
function my_object(looper, minFinder, ave) {
    this.firstName = looper_var;
    this.lastName = minFinder_var;
    this.age = ave_var;
}

////////////////////////////////////////
// Create a JavaScript object called person with the following properties/methods
   // Properties
   // name - set this as your own name
   // distance_traveled - set this initially as zero
   // Methods
   // say_name - should alert the object’s name property
   // say_something - have it accept a parameter.
     //This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
   // walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3.
   // run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10.
   // crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
  name : "Fred",
  distance_traveled : 0,
  say_name : function(){
      console.log(person.name);
  },
  say_something: function(param){
      console.log(`${person.name} says: ${param}`);
  },
  walk : function(){
      console.log(`${person.name} is walking!`);
      person.distance_traveled += 3;
      return person;
  },
  run : function(){
      console.log(`${person.name} is running!`);
      person.distance_traveled += 10;
      return person;
  },
  crawl : function(){
      console.log(`${person.name} is crawling!`);
      person.distance_traveled += 1;
      return person;
  }
}

var a_person = person.walk();
