/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(noOfChild,pName,location,title){
console.log("You will be a "+title+" in "+location+" and married to "+pName+" with "+noOfChild+ " kids. ");
}
tellFortune(3, 'Alice', 'Jordan ', 'software engineer');

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
console.log("Your doggie is "+age*7+" years old in dog years!");
}
calculateDogAge(1);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age,amount){
  //consider the user is human being age (+)
  const maxAge=100;
console.log("you will need "+((maxAge-age)*amount*365)+" cups of tea to last you until the ripe old age of 100 ");
}
calculateSupply(30,3)
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
console.log("Hello "+name);
}
greet("Adam");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
console.log("In example #5 we have an error with parameter name cat!=x,7");



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double(x) {
  console.log(2*x);
}
double(1);

function double2(x){
console.log(2*x);
}
double2(2);
function double3(x){
  console.log(2*x);
  }
  double3(3);



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
console.log("----------------- Q7 ---------------------");

function cube(num){
console.log(Math.pow(num,3));
}
cube(4);
console.log("------------------ Q8 ----------------------");


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1,num2){

  console.log(num1*num2);
}
multiply(3,4);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
(age > 20) ? console.log("yes you can ") : console.log("please don't return back even after "+(20-age)+" years");
}

canIGetADrivingLicense(10);
canIGetADrivingLicense(30);
console.log("-------------- Q9 ----------------")
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1,str2){
    console.log(str1.length==str2.length)
}
sameLength("tree","car")
sameLength("tree","clue")

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1,num2){
  console.log(Math.max(num1,num2));
}
largerNubmer(1,10)
console.log("=================== Q12 =============");
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1,num2,num3){
  console.log(Math.min(num1,num2,num3));
}
smallerNubmer(-2,10,20)

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> tr

*/
function shorterString(str1,str2,str3,str4,str5){

switch(Math.min(str1.length,str2.length,str3.length,str4.length,str5.length)){
case str1.length:console.log(str1);
  break;
case str2.length:console.log(str2);break;
case str3.length:console.log(str3);break;
case str4.length:console.log(str4);break;
case str5.length:console.log(str5);break;

}
}
shorterString("air","tr","car","github","by") 
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
console.log("-------------Q14--------------");
function longerString(str1,str2,str3,str4){
  switch(Math.max(str1.length,str2.length,str3.length,str4.length)){
    case str1.length:console.log(str1);
      break;
    case str2.length:console.log(str2);break;
    case str3.length:console.log(str3);break;
    case str4.length:console.log(str4);break;    
    }
}
longerString("air","schoo","car","github");
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number){
(number%2==0)?console.log(true):console.log(false);
} 
isEven(1);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number){
  (number%2!=0)?console.log(true):console.log(false);
  } 
  isOdd(1);
  


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number){
 console.log(Math.abs(number));
  } 
  positive(-1);
  

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fName,lName){
console.log(`${fName} ${lName}`);
}
fullName("Adam","McCallen")

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1,n2,n3,n4,n5){
console.log( (n1+n2+n3+n4+n5)/5);
}
average(5,7,9,3,5)
console.log("-------------------q20-----------------");

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function radnomNumber(){
  console.log(Math.random());
}
radnomNumber();
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(num1,num2){
console.log((Math.random()*(num2-num1))+num1);
}
randomBetweenNumbers(1,8)


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score){
switch(true){
case (49>score): console.log("raseb");break;
case (50<=score && score<=69):console.log("m8bool");break;
case (70<=score &&score<=84):console.log("good");break;
case (85<=score && score<=94):console.log("V.good");break;
case (score<=100):console.log("A");break;
}
}
scoreInUniversty(96);
scoreInUniversty(3);
scoreInUniversty(71);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count=0;
function counter(){
console.log(++count);
}

counter();
counter();
counter();
counter();
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
  console.log(`${count} and the counter reset now`);
  count=0;
}
resetCounter();
counter();
counter();
counter();
resetCounter();
counter();