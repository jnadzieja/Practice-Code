// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================
// Create a basic variable
var basicVar = "This is a basic Variable.";

// 2. ARRAYS
// ==========================================================
// Create an array of five strings
var fiveStrings = ["Josh", "Nadzieja", "21", "Handsome", "Noah"]

// Create an array of five numbers
var fiveNumbers = [5, 4, 3, 2, 1]

// 3. FOR LOOPS
// ==========================================================
// Create a for loop that loops through and prints "My name is Bob" five times
for (var i = 0; i < 5; i++)
  console.log("My name is Bob")
// Create a for loop that loops through your five string array
for (var i = 0; i < fiveStrings.length; i++) {
  console.log(fiveStrings[i])
};

// 4. FUNCTIONS
// ==========================================================
// Create a function that takes two numbers and divides the first number by the second.
var myFunction = function (divide) {
  console.log(10 / 5)
};
// Then call that function
myFunction();

// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
var myFunction2 = function (printNum) {
  for (var i = 0; i < fiveNumbers.length; i++)
    console.log(fiveNumbers[i])
};
// Then call that function
myFunction2();

// 5. OBJECTS
// ==========================================================
// Create a JavaScript Object
var dog = {
  name: "Tank",
  age: "4 months",
  breed: "Golden Retriever",
  cute: "Yes"
};
// Console log any three of the properties in that object
console.log(dog.name, dog.age, dog.breed);
// Create an Array of 5 Objects
var objectArray = [
  dog, {
    name: "Skully",
    age: "10 months",
    breed: "Golden Retriever",
    cute: "Yes",
  },
  cat, {
    name: "Powerup",
    age: "6 years",
    color: "White",
    temperament: "Chill"
  },
  me, {
    name: "Josh",
    age: "21",
    species: "Human",
    handsome: "Yes"
  },
  brother, {
    name: "Noah",
    age: "18",
    species: "Human",
    annoying: "Sometimes"
  },
  dad, {
    name: "Michael",
    age: "57",
    cool: "Yes",
    fun: "Yes"
  }
]
// Console log 3 properties for every one of the five objects
console.log(objectArray[0].name, objectArray[0].age, objectArray[0].breed);
console.log(objectArray[1].name, objectArray[1].age, objectArray[1].color);
console.log(objectArray[2].name, objectArray[2].age, objectArray[2].handsome);
console.log(objectArray[3].name, objectArray[3].age, objectArray[3].annoying);
console.log(objectArray[4].name, objectArray[4].age, objectArray[4].cool);

// 6. JQUERY EVENTS
// ==========================================================
// Create a basic html button then create an onClick event that triggers an on click event.
var button1 = $("<button>")
$("body").append(button1)
$(button1).on("click", function () {
  console.log("jQuery > JavaScript")
});

// 7. OVERALL STRUCTURE
// ==========================================================
// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
