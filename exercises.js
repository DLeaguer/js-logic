/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*var today = new Date();

function 
if (today === "Friday") {
	return "Let's Party!";
}
console.log();
*/

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
	if (age >= 18) {
		return "1. you are able to vote";
	}else{
		return "1. try again next year";
	}
}

var voter = canVote(21);
console.log(voter);
var voto = canVote(17);
console.log(voto);


/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

function login(password){
	if (password === "test1234"){
		return "2. Login Success!";
	}else{
		return "2. Try again";
	}
}

var signIn = login("test1234");
console.log(signIn);

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
	if (first > second) {
		return "3. " + true;
	}else{
		return "3. " + false;
	}
}

var igt = isGreaterThan(5, 2);
console.log(igt);

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
	if (boo === true) {
		return "4. " + true;
	}else{
		return "4. " + false;
	}
}

var mbt = mustBeTrue(5 > 2);
console.log(mbt);
var mustB = mustBeTrue("boo");
console.log(mustB);

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
	if (word.length === 3) {
		return "5. Word to Big Bird!";
	}else{
		return "5. Try again";
	}
}

var threeWord = bigBird("get");
console.log(threeWord);
var fourWord = bigBird("four");
console.log(fourWord);

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
	if (first === second) {
		return "6. You look mahvelous";
	}else{
		return "6. I don't know who you are anymore.";
	}
}

var ie =  isEqual("5", "5");
console.log(ie);

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

function notEqual(first, second){
	if (first !== second) {
		return "7. Opposites do attract";
	}else{
		return "7. Cause it's like you're my mirror.";
	}
}

var ne = notEqual("5", 5);
console.log(ne);

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
	if (money > 100) {
		return "8. " + true + " extra " + (money - 100);
	}else{
		return "8. " + false + " less " + (money - 100);
	}
}

var sc =  spareChange(220);
console.log(sc);
var spareC = spareChange(60);
console.log(spareC);

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
	if (sum > 30) {
		return "9. " + true + sum;
	}else{
		return "9. " + false + sum;
	}
}

var d3 =  dirty30(10, 11, 12);
console.log(d3);
var d30 = dirty30(9, 9, 9);
console.log(d30);

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
	if (num % 2 === 0) {
		return "10. " + true;//num;
	}else{
		return "10. " + false;//num;
	}
}

var es = evenStevens(18);
console.log(es);
var evens = evenStevens(19);
console.log(evens);


/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number ` age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 

function daClub(cover, age){
	if (cover >= 21 && age >= 21) {
		return "11. Welcome to the Legends Lounge.";
	}else{
		return "11. Chuck E Cheese is across the street.";
	}
}

var dc = daClub(21, 21);
console.log(dc);

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

function graduation(credit, thesis){
	if (credit >= 120 || thesis >= 120) {
		return "12. Congratulations on a job well done.";
	}else{
		return "12. See you in summer school.";
	}
}

var grad = graduation(200, 200);
console.log(grad);

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
	if (speed < 50) {
		return "13. You are riding Honolulu's Rail.";
	}else{
		return "13. You are riding an Amtrak.";
	}
}

var speeder = moneyTrain(49);
console.log(speeder);

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

var budget = 21;
var doughnutPrice = 5;
var doughnutBought = 0;
//var newBudget = budget-=doughnutPrice; need to be inside function
//var doughnutCount = doughnutBought++; need to be inside function

//var spent = budget -= doughnutPrice;
//var bought = doughnutBought ++;


function buyDoughnut(){
	//var newBudget = budget-=doughnutPrice;
	//var doughnutCount = doughnutBought++;
	if (budget >= doughnutPrice) {
		var spent = budget -= doughnutPrice;
		var bought = ++doughnutBought;
		spent;
//		console.log("spent " + spent);
		bought;
//		console.log("bought " + bought);
		//newBudget;
		//doughnutCount;
		//budget -= doughnutPrice;
		//doughnutBought++;

	}else{
		console.log("you are broke");
	}
}


//Jamie's code
//function buyDoughnut(){
//if (budget >= doughnutPrice){
//return budget -+ doughnutPrice, ++doughnutBought;
//}else{
//	return "you're broke";
//}
//}
//}//++ before doughnutBought and not after in return statement

/*
function buyDoughnut(){
	if (budget >= doughnutPrice) {
		budget -= doughnutPrice;
		doughnutBought++;
	}
}
*/

//var newBudget = budget-=doughnutPrice; need to be inside function
//var doughnutCount = doughnutBought++; need to be inside function

buyDoughnut();
//var bd = buyDoughnut();
//console.log(bd);
console.log("14. budget " + budget);
console.log("14. doughnutBought " + doughnutBought);
//console.log("spent ", + spent);
//console.log("bought ", + bought);

buyDoughnut();
console.log("14. budget " + budget);
console.log("14. doughnutBought " + doughnutBought);

buyDoughnut();
console.log("14. budget " + budget);
console.log("14. doughnutBought " + doughnutBought);

buyDoughnut();
console.log("14. budget " + budget);
console.log("14. doughnutBought " + doughnutBought);

buyDoughnut();
console.log("14. budget " + budget);
console.log("14. doughnutBought " + doughnutBought);

/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of the week.*/

function dailySpecials(special) {
	switch (special) {
		case "Sunday": return "Sunday - Spaghetti & Garlic Bread";
		case "Monday": return "Monday - Beef Stew";
        case "Tuesday": return "Tuesday - Beef Curry";
        case "Wednesday": return "Wednesday - Loco Moco";
        case "Thursday": return "Thursday - Teriyaki Steak";
        case "Friday": return "Friday - Hawaiian Plate";
        case "Saturday": return "Saturday - Mahi Mahi";
        default: return "Specials 0 - 6 Sunday - Saturday";
    }
}
var special = dailySpecials("Tuesday");
console.log("The Special for " + special);

/*function dailySpecials(special){	
	//var day //= special;
	switch (special) {
    	case "Sunday":
        	day = "Sunday - Spaghetti & Garlic Bread";
        	break;
    	case 1:
        	day = "Monday - Beef Stew";
        	break;
    	case 2:
        	day = "Tuesday - Beef Curry";
        	break;
    	case 3:
        	day = "Wednesday - Loco Moco";
        	break;
    	case 4:
        	day = "Thursday - Teriyaki Steak";
        	break;
    	case 5:
        	day = "Friday - Hawaiian Plate";
        	break;
    	case 6:
        	day = "Saturday - Mahi Mahi";
	}
}*/



/*function dailySpecials(day){	
	//var day //= special;
	switch (new Date().getDay()) {
    	case 0:
        	day = "Sunday - Spaghetti & Garlic Bread";
        	break;
    	case 1:
        	day = "Monday - Beef Stew";
        	break;
    	case 2:
        	day = "Tuesday - Beef Curry";
        	break;
    	case 3:
        	day = "Wednesday - Loco Moco";
        	break;
    	case 4:
        	day = "Thursday - Teriyaki Steak";
        	break;
    	case 5:
        	day = "Friday - Hawaiian Plate";
        	break;
    	case 6:
        	day = "Saturday - Mahi Mahi";
	}
}*/

//var eatSpecial = dailySpecials(day);
//console.log(eatSpecial);
//console.log(day);
//console.log(dailySpecials(2));


/*Perhaps interesting to note that you dont need the clutter of ;break; statements if you wrap it in a function. (as described by heloandre)

function switchResult(a){
	switch(a){
		case 1: return "FOO";
        case 2: return "BAR";
        case 3: return "FOOBAR";
        default: return "OK";
    }
}
var a = switchResult(3);*/

/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

var players = ["Player: 1", "Player: 2", "Player: 3", "Player: 4", "Player: 5"];

for (var i = 0; i < players.length; i++) {
	console.log("15. " + players[i]);
}

/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

for (i = 0; i < myFavFoods.length; i++) {
	console.log("16. " + myFavFoods[i]);
}
console.log(myFavFoods + "");

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

var numArray = [1, 2, 3, 4, 5];
//var total = 0;

function sumItUp(arr) {
	//var numArray = [1, 2, 3, 4, 5]; must be outside function before or after no difference
	var total = 0; //works inside or outside function
	//for (i = 0; i < arr.length; i++) {
		//console.log(arr[i]); only list array
		//total += arr[i]; //total = total + arr[i]
		//console.log(total += arr[i]); // shows all sum steps of array each time it passes through
	for (i = 0; i < numArray.length; i++) {
		//console.log(numArray[i]); only list array
		//console.log(total += numArray[i]); //works but shows all sum steps of array each time it passes through
		(total += numArray[i]); //works but undefined without return, return needed
		//console.log(sumItUp(arr)); broken
	}return "17. " + total; //if no return, then return is undefined
}

//var numArray = [1, 2, 3, 4, 5];
//var total = 0;
//console.log(sumItUp(arr)); broken
//console.log(sumItUp(total)); //works var total = 0 on the outside otherwise broken
//console.log(sumItUp(total += numArray[i])); //undefined without return and with return it is NaN
console.log(sumItUp(numArray)); //works

//conclusion:  using arr inside the function can be replaced with numArray1, numArray2, etc.  using numArray inside the function can only use numArray.  If numArray1, numArray2, etc. is used numArray will have to be rewritten inside the function as numArray1, numArray2, etc. 

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

var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];

function allStars(ballers){
	for (var i = 0; i < ballers.length; i++) {
		console.log(ballers[i]);		
		}
		if (ballers[i] % 2 === 0){
		//var east = ballers[i] % 2 !== 0;
		console.log(ballers[i].push(ballers[i]));
		//console.log(east);
		}else if (ballers[i] % 2 !== 0){
		//var west = ballers[i] % 2 === 0;
		console.log(ballers[i].push(ballers[i]));		
		//console.log(west);
		}

//	if (ballers[i] % 2 !== 0) {
//		return "east - " + ballers[i];
//	}else if (ballers[i] % 2 === 0){
//		return "west - " + ballers[i];
//	}
}
allStars(players);
//var pros = allStars(players);
//console.log(pros);
console.log(east);
console.log(west);

//for (i = 0; i < players.length; i++){
	//players[i] % 2 === 0;
	//console.log(players[i]);
//	return "east - " + [players[i]];
//	console.log(players[i]);
//}
//for (i = 0; i < players.length; i++){
	//players[i] % 2 !== 0;
//	console.log(players[i]);
//	return "west - " + [players[i]];
//}

//console.log(players);
//var east = players.indexOf() % 2 !== 0;
//var west = players.indexOf() % 2 === 0;
//console.log(east);
//console.log(west);

//function allStars(ballers) {
	
//	for (i=0; i<ballers.length; i++){
		//console.log(ballers[i]);
		//ballers[i].indexOf(/*[i]*/)%2===0;
		//console.log(ballers[i].push);
		
		//if (/*var east = ballers[i].indexOf()*/i % 2 === 0){
		//	return "east -" + ballers/*[i]*/.push[i];
		//}else if (/*var west = ballers[i].indexOf()*/ i % 2 !== 0){
		//	return "west -" + ballers/*[i]*/.push[i];
		//}else{
		//	return "no more players";
		//}
		//}
		//if (players.indexOf() % 2 !== 0) {
		//	return "east - " + players;
		//}else{
		//	return "west - " + players;
		//}else{
			//return "no more players";
		//}		
		//return ballers;
		//return east && west;
		//console.log(east[i]);
		//console.log(west[i]);
		//console.log(players[i]);
		//console.log(players[i]);
//	}
	//return ;
//}
 
//console.log(allStars(players));
//console.log(east);
//console.log(west);


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

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];


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

var phrase = "An apple a day keeps Alice feeling awesome!";




