//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
    name: "Mike",
    age: 33
}
alert(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Death Cab for Cutie",
  food: "Ribs",
  person: "Susie",
  book: "Something Wicked This Way Comes",
  movie: "The Empire Strikes Back",
  holiday: "Christmas"
}

console.log(favoriteThings);
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "One that works"

console.log(favoriteThings);


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of stupid";

console.log(favoriteThings);




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = "firstPocket";

backPack[item] = "chapstick";

console.log(backPack);

backPack.color = "black";

//After you do the above, alert your entire backPack object.

alert(backPack);
/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Mike",
  age: 33,
  height: "6'",
  gender: "M",
  married: true,
  eyeColor: "blue",
  haricolor: "brownish"
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for(var key in me){
  alert(me[key]);
}




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  track1: "5:30",
  track2: "2:43",
  track3: "1:33",
  track4: "3:22",
  track5: "0:33"
}

//Now, loop through your album object alerting every song title individually.

for(var key in album){
  alert(key);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  CA: 5000000,
  UT: 1000000,
  OR: 2000000,
  WA: 2500000,
  NV: 6
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for(var key in states){
  if(states[key] > 30000){
    alert(key);
  }
}



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for(var key in user){
  if(user[key] === false || user[key] === null || user[key] === NaN || user[key] === 0 || user[key] === "" || user[key] === undefined){
    delete user[key];
  }
}
console.log(user);
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Mike Larrabee";
user.pwHash = "a;sldfja;lsjf";
user.username = "mblarrabee";
console.log(user);



//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = "Tyler S. Mcginnis";
user.email = "tyler.mcginnis@devmounta.in";

console.log(user);

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert("hello");
}
methodCollection.logHello = function() {
  console.log("hello");
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(name, bday, ssn){
  return person = {
                    Name: name,
                    Birthday: bday,
                    SSN: ssn
                  }
}
//console.log(MakePerson("mike", "12/12/2012", "666-05-9696"));



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

function MakeCard(cardnum, exp, cvs, name, company){
  return card = {
                  cardNumber: cardnum,
                  expDate: exp,
                  CVS: cvs,
                  cardHolder: name,
                  Company: company
                }
}

//console.log(MakeCard(123456789, "12/12", 222, "John Doe", "VISA"));
  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

function bindCard(person, card){
  return personcard = {person, card};
}

console.log(bindCard(MakePerson("mike", "12/12/2012", "666-05-9696"), MakeCard(123456789, "12/12", 222, "John Doe", "VISA")));



