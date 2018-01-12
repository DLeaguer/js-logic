/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

function canVote(age){
	if (age >= 18){
		return true;
	}else{
		return false;
	}
}
console.log("1. 19 canVote: " + canVote(19));
console.log("1. 16 canVote: " + canVote(16));

/*
1. 19 canVote: true
1. 16 canVote: false
*/

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
t *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

function login(password){
	if (password === 'test1234'){
		return "Login Success!";
	}else{
		return "Try again";
	}
}
console.log('2. login: ' + login('test1234'));
console.log('2. login: ' + login("test124"));

/*
2. login: Login Success!
2. login: Try again
*/

/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first, second){
	if (first > second){
		return true;
	}else{
		return false;
	}
}
console.log('3. 2 isGreaterThan 1: ' + isGreaterThan(2, 1));
console.log('3. 1 isGreaterThan 2: ' + isGreaterThan(1, 2));

/*
3. 2 isGreaterThan 1: true
3. 1 isGreaterThan 2: false
*/

/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

function mustBeTrue(boo){
	if (boo === true){
		return true;
	}else{
		return false;
	}
}
console.log('4. 2>1 mustBeTrue: ' + mustBeTrue(2>1));
console.log('4. 1>2 mustBeTrue: ' + mustBeTrue(1>2));

/*
4. 2>1 mustBeTrue: true
4. 1>2 mustBeTrue: false
*/

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

function bigBird(word){
	if (word.length === 3){
		return 'Word to Big Bird!';
	}else{
		return false;
	}
}
console.log('5. dog is a 3 letter word: ' + bigBird('dog'));
console.log('5. fetch is a 3 letter word: ' + bigBird('fetch'));

/*
5. dog is a 3 letter word: Word to Big Bird!
5. fetch is a 3 letter word: false
*/

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

function isEqual(first, second){
	if (first === second){
		return "You look mahvelous";
	}else{
		return "I don't know who you are anymore.";
	}
}
console.log("6. isEqual: " + isEqual("dog", "cat"));
console.log("6. isEqual: " + isEqual('dog', 'dog'));

/*
6. isEqual: I don't know who you are anymore.
6. isEqual: You look mahvelous
*/

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` an, d `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

function notEqual(first, second){
	if (first === second){
		return 'Opposites do attract';
	}else{
		return "Cause it's like you're my mirror."
	}
}
console.log("7. notEqual: " + notEqual('dog', 'dog'));
console.log("7. notEqual: " + notEqual('dog', 'god'));

/*
7. notEqual: Opposites do attract
7. notEqual: Cause it's like you're my mirror.
*/

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

function spareChange(money){
	if (money > 100){
		return true;
	}else{
		return false;
	}
}
console.log('8. 101 spareChange: ' + spareChange(101));
console.log('8. 99 spareChange: ' + spareChange(99));

/*
8. 101 spareChange: true
8. 99 spareChange: false
*/

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

function dirty30(one, two, three){
	var sum = one + two + three;
	if (sum > 30){
		return true;
	}else{
		return false;
	}
}
console.log('9. dirty30: ' + dirty30(10, 11, 12));
console.log('9. dirty30: ' + dirty30(7, 8, 9));

/*
9. dirty30: true
9. dirty30: false
*/

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

function evenStevens(num){
	if (num % 2 === 0){
		return true;
	}else{
		return false;
	}
}
console.log('10. evenStevens: ' + evenStevens(10));
console.log('10. evenStevens: ' + evenStevens(9));

/*
10. evenStevens: true
10. evenStevens: false
*/

/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 

function daClub(cover, age){
	if (cover >= 21 && age >= 21){
		return 'Welcome to the Legends Lounge.';
	}else{
		return 'Chuck E Cheese is across the street.';
	}
}
console.log('11. daClub: ' + daClub(21, 22));
console.log('11. daClub: ' + daClub(18, 22));

/*
11. daClub: Welcome to the Legends Lounge.
11. daClub: Chuck E Cheese is across the street.
*/

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

function graduation(credits, thesis){
	if (credits >= 120 || thesis === true){
		return 'Congratulations on a job well done.';
	}else{
		return 'See you in summer school.';
	}
}
console.log('12. graduation: ' + graduation(121, false));
console.log('12. graduation: ' + graduation(119, false));

/*
12. graduation: Congratulations on a job well done.
12. graduation: See you in summer school.
*/

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

function moneyTrain(speed){
	if (speed < 50){
		return "You are riding Honolulu's Rail";
	}else{
		return 'You are fiding an Amtrak.';
	}
}
console.log('13. moneyTrain: ' + moneyTrain(49));
console.log('13. moneyTrain: ' + moneyTrain(51));

/*
13. moneyTrain: You are riding Honolulu's Rail
13. moneyTrain: You are fiding an Amtrak.
*/

/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 
console.log("");
console.log("14: ")
var budget = 21;
var doughnutPrice = 6;
var doughnutBought = 0;

function buyDoughnut(){
	if (budget > doughnutPrice){
		budget -= doughnutPrice; 
		doughnutBought++;
		console.log('buy doughnut');
	}else{
		console.log('you are broke');
	}
	
}
buyDoughnut();
console.log(budget);
console.log(doughnutBought);

buyDoughnut();
console.log(budget);
console.log(doughnutBought);

buyDoughnut();
console.log(budget);
console.log(doughnutBought);

buyDoughnut();
console.log(budget);
console.log(doughnutBought);

/*

14:
buy doughnut
15
1
buy doughnut
9
2
buy doughnut
3
3
you are broke
3
3
*/

/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of the week.*/
console.log("");
console.log("Final Boss: ");

function dailySpecials(special){
	switch (special) {
    case "Sunday" :
        return "Sunday - Spaghetti & Garlic Bread";
    //    break;
    case "Monday" :
        return "Monday - Beef Stew";
    //    break;
    case "Tuesday" :
        return "Tuesday - Beef Curry";
    //    break;
    case "Wednesday" :
        return "Wednesday - Loco Moco";
    //    break;
    case "Thursday" :
        return "Thursday - Teriyaki Beef";
    //    break;
    case "Friday" :
        return "Friday - Hawaiian";
    //    break;
    case "Saturday" :
        return "Saturday - Mahi Mahi";
    //    break;
    default :
    	return "That's not a day";
	}
}
console.log(dailySpecials("Tuesday"));

/*
Final Boss:
Tuesday - Beef Curry
*/

/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/
console.log('');
console.log("Sample: ")

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}

/*
Sample:
Toyota Corolla
Toyota Prius
Toyota 4 Runner
Toyota Camry
Toyota Land Cruiser
*/

/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/
console.log('');
console.log("15. ");

var players = ["Player: 1", "Player: 2", "Player: 3", "Player: 4", "Player: 5"];

for (var i=0; i<players.length; i++){
	console.log(players[i]);
}

/*
15.
Player: 1
Player: 2
Player: 3
Player: 4
Player: 5
*/

/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/

console.log('');
console.log('16. ');

  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

for (var i=0; i<myFavFoods.length; i++){
	console.log(myFavFoods[i]);
}
console.log(myFavFoods);
console.log(myFavFoods + '');

/*
16.
lemon bar
carrot cake
nachos
bacon cheeseburger
ramen
sweet potato fries
chimichanga
[ 'lemon bar',
  'carrot cake',
  'nachos',
  'bacon cheeseburger',
  'ramen',
  'sweet potato fries',
  'chimichanga' ]
lemon bar,carrot cake,nachos,bacon cheeseburger,ramen,sweet potato fries,chimich
anga
*/

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/

console.log('');
//console.log('17: ');

var numArray = [1, 2, 3, 4, 5];
var total = 0;

function sumItUp(arr){
	for (var i=0; i<arr.length; i++){
	//	console.log(arr[i]);
		total += arr[i];
	}
}
sumItUp(numArray);
console.log('17. sumItUp: ' + total);

/*
17. sumItUp: 15
*/

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

console.log('');
console.log('18: ');

var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];
var east = [];
var west = [];

function allStars(ballers){
	for (var i=0; i<ballers.length; i++){
		if (i % 2 === 0){
			east.push(ballers[i]);
		//	console.log('east: ' + ballers[i]);
		}else if (i % 2 !== 0){
			west.push(ballers[i]);
		//	console.log('west - ' + ballers[i]);
		}			
	}
}
allStars(players);
console.log(east);
console.log(west);

/*
18:
[ 'Yao Ming', ' Jesus Shuttlesworth', 'Sidney Deane' ]
[ 'BrookLin', 'Manute Bol', 'World B Free' ]
*/

/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

console.log('');
console.log('19: subways special: ');

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

function subways(special){
	for (var i=0; i<special.length; i++){
		if (i % 2 !== 0){
			special.splice(i, 1, 'Classic Tuna');
		}
		console.log(special[i]);
	}
}
subways(subOftheDay);
//console.log(subways(subOftheDay));creates undefined

/*
19: subways special:
Teriyaki Chicken
Classic Tuna
Turkey
Classic Tuna
Black Forest Ham
Classic Tuna
Veggie
*/

/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

console.log('');
console.log('20: ');

var phrase = "An apple a day keeps Alice feeling awesome!";
var newPhrase = []; 

function removeLetter(str){
	for (var i=0; i<str.length; i++){
	//	console.log(str[i]);
		if (str[i]!=='A' && str[i]!=='a'){
			newPhrase.push(str[i]);
		}
	}
	console.log(newPhrase + '');
}  
removeLetter(phrase);

//20:
//n, ,p,p,l,e, , ,d,y, ,k,e,e,p,s, ,l,i,c,e, ,f,e,e,l,i,n,g, ,w,e,s,o,m,e,!

