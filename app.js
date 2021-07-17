//==========CHAPTER 21-25 "STRING METHODS"==========STARTS
//1.
var fname = prompt("Enter your First Name");
var lname = prompt("Enter your Last Name");
var fullName = (fname + " " + lname);
alert("Welcome" + " " + fullName + "!");
//2.
var fMob = prompt("Enter your favourite mobile phone model name");
var result = fMob.length;
document.write("My favorite phone is : " + fMob + 
" <br>Length of string : " + result);
//3.
var text = "Pakistani";
var result = text.indexOf("n");
document.write("String : " + text + " <br>Index of 'n' : " + result);
//4.
var text1 = "Hello World";
var result = text1.lastIndexOf("l");
document.write("String : " + text1 + " <br>Last Index of 'l': " + result);
//5.
var text2 = "Pakistani";
var result = text2.charAt(3);
document.write("String : " + text2 + " <br>Character at Index 3: " + result);
//6.
var firstName = prompt("Enter your first Name ");
var lastName = prompt("Enter your last Name ");
var fullName = firstName.concat(" ", lastName);
alert("Welcome " + fullName + " !");
//7.
var city = "Hyderabad";
var result = city.replace("Hyder", "Islam");
document.write("City : " + city + " <br>After replacement : " + result );
//8.
var message =
 "<br>Ali and Sami are best friends. They play cricket and football together.";
var result = message.replace(/and/g, "&");
document.write(result);
//9.
var numString = "472";
var onlyNum = 472;
var result = Number(numString);
var type1 = typeof numString;
var type2 = typeof onlyNum;
document.write("<br>Value: " + result +
" <br>Type: " + type1 + 
"<br>Value: " + onlyNum + 
" <br>Type: " + type2);
//10.
var userInput = prompt("type anything in Lowercase letter :");
var result = userInput.toUpperCase();
document.write("<br>User input : " + userInput + " <br>Upper case : " + result);
//11.
var userInput = prompt("type anything in Lowercase letter :");
var result = userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("<br>User input : " + userInput + " <br>Title case : " + result);
//12.
var num = 35.36;
var result = parseInt(num.toString().replace(".", ""));
document.write("<br>Number : " + num + " <br>Result : " + result);
//13.

//14.
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var user_value = prompt(
 "Welcome to ABC Bakery. What do you want to order sir/madam?"
 );
var reqItem = user_value.toLowerCase();
var found;
var indexOfOrder;
for (var i = 0; i < a.length; i++) {
 if (a[i] == reqItem) {
 found = a[i];
 indexOfOrder = i;
 }
}
if (!found) {
 document.write(
 "We are sorry. " + user_value + " is <b>not available</b> in our bakery<br>"
 );
} else {
 document.write(
 found + " is <b>available</b> at index " + indexOfOrder + " in our bakery<br>"
 );
}
//15.

//16.
var university = "University of Karachi";
var result = university.split("");
for (var i = 0; i < result.length; i++) {
 document.write(result[i] + "<br>");
}
//17.
var userInput = prompt("Write a text");
var result = userInput.substr(-1);
document.write("User input : " + userInput + 
" <br>Last character of input : " + result
);
//18.
var temp = "The quick brown fox jumps over the lazy dog";
var result = (temp.match(/the/gi) || []).length;
document.write("<br>Text : " + temp + 
 " <br>There are " + result + " occurrences of word 'the'");
//==========CHAPTER 21-25 "STRING METHODS"==========ENDS


//==========CHAPTER 26-30 "MATH METHODS "==========STARTS
//1.
var num = prompt("Enter a positive number for e.g: 3.45214");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write(
 "<br>number : " +
 num +
 "<br>round off value : " +
 round +
 "<br>floor value : " +
 floor +
 "<br>ceil value : " +
 ceil
);
//2.
var num = prompt("Enter a negative number for e.g: -2.673");
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);
document.write(
 "number : " +
 num +
 "<br>round off value : " +
 round +
 "<br>floor value : " +
 floor +
 "<br>ceil value : " +
 ceil
);
//3.
var value = -8;
var result = Math.abs(value);
document.write("The absolute value of " + value + " is " + result);
//4.
var result = Math.floor(Math.random() * 6);
document.write("Random dice value : " + result);
var result = Math.floor(Math.random() * 6);
document.write("<br>Random dice value : " + result);
//5.
var result = Math.floor(Math.random() * 2);
document.write("Random coin value heads: " + result);
var result = Math.floor(Math.random() * 2);
document.write("<br>Random coin value tails : " + result);
//6.
var rand = Math.floor(Math.random() * 100);
document.write("random number between 1 and 100 : " + rand);
//7.
var userWeight = prompt("Enter your weight in kilograms : ");
var result = userWeight.replace(/\D/g, "");
document.write("The weight of user is : " + result + " kilograms");
//8.
var rand = Math.floor(Math.random() * 10);
var pro = parseInt(prompt("Enter a number between 1 to 10"));
if (pro == rand) {
 alert("Congratulations your guess is correct");
} else {
 alert("Try again!");
}
//==========CHAPTER 26-30 "MATH METHODS "==========ENDS


//==========CHAPTER 31-34 "DATE METHODS "==========STARTS
//1.
var d = new Date();
document.write(d);
//2.
var monthNames = ["January","February","March", "April","May","June",
 "July","August","September","October", "November", "December" ];
 var d = new Date();
 alert("Current month : " + monthNames[d.getMonth()]);
 //3.
var weekday = ["Sun","Mon", "Tue","Wed","Thu","Fri","Sat","Sun"];
var d = new Date();
alert("Today is "+ weekday[d.getDay()] + ".");
//4.
var weekday = ["Sun","Mon", "Tue","Wed","Thu","Fri","Sat","Sun"];
var d = new Date();
var n = weekday[d.getDay()];
if (n == "Sat" || n == "Sun") {
 alert("Its Fun day");
} else {
 alert("Working day");
}
//5.
var date = new Date();
var onlyDate = date.getDate();
if (onlyDate > 15) {
 document.write("<br>Last days of the month");
} else {
 document.write("<br>First fifteen days of the month");
}
//6.

//7.
var d = new Date();
var hour = d.getHours();
if (hour > 12) {
 alert("Its PM");
} else {
 alert("Its AM");
}
//8.
var laterDate = new Date(2020, 12, 0);
document.write("Later date: " + laterDate);
//9.
var ramzan = new Date(2020, 6, 17);
var d = new Date(2015, 6, 18);

var diffTime = Math.abs(d - ramzan);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.write(diffDays + " days have passed since 1st Ramadan,2015");
//10.

//11.
var cur = new Date();
document.write("<br>Current date : " + cur);
var d = new Date();
d.setHours(d.getHours() - 1);
document.write("<br>1 hour ago, it was " + d);
//12.
var cur = new Date();
 var d = new Date();
 d.setFullYear(d.getFullYear() - 100);
 alert("Current date :" + cur + "\n100 years back, it was " + d);
//13.
var age = +prompt("Enter your age : ");
 var d = new Date();
 var birth = d.getFullYear() - age;
 document.write("<br>Your age is " + age + "<br>Your birth year is " + birth);
//14.
var customerName = "ABC Customer";
 var month = "February";
 var unit = 410;
 var per_unit = 16;
 var Net_amount_payable = unit * per_unit;
 var surcharge = 350;
 var Gross = Net_amount_payable + surcharge;
 document.write(
 "<h1>K-Electric Bill</h1><br>Customer Name: <b>" + customerName +
 "</b><br>Month: <b>" + month +
 "</b><br>Number of units: <b>" + unit +
 "</b><br>Charges per unit: <b>" + per_unit +
 "</b><br><br>Net Amount Payable (within Due Date): <b>" + Net_amount_payable +
 "</b><br>Late payment surcharge: <b>" + surcharge +
 "</b><br>Gross Amount Payable (after Due Date): <b>" + Gross + "</br>" );

//==========CHAPTER 31-34 "DATE METHODS "==========ENDS


//==========CHAPTER 35-38 "FUNCTION "==========STARTS
//1.
var d = new Date();
document.write(d);
//2.
var first = prompt("Enter Your First Name");
var second = prompt("Enter Your Last Name");
var total = this.first + " " + this.second;
function fullName(first,second){
 return total;
 //var total = this.first + this.second;
 }
alert("Hello "+ fullName(first,second));
//3.
var a = +prompt("Enter Your First Num");
var b = +prompt("Enter Your Last Num");
var sum = this.a + this.b;
function fullNum(a,b){
 return sum;
 }
alert(fullNum(a,b));
//4.

//5.
function square(value){
 newValue = value **2
 alert(newValue)
 }
 square(8);

 //5.
 var sqr = +prompt("Enter number whose square is required");
 function square(){
 newValue = sqr **2
 return newValue;
 }
 document.writeln('The square of ' + sqr + " " + 'is ' + square(newValue));
 //6.
 function fact(n){
 if ( n > 0 && n <=1){
 return 1;
 } 
 else{
 return n * fact(n-1);
 }
 }
 fact(5);
 alert(fact(5));
//7.
function counting() {
 var num1;
 var num2;
 var i;
 num1 = prompt("Please enter first number");
 num2 = prompt("Please enter last number");
 for (i = num1; i < num2; i++)
 document.write(i + "<br>");
 return i;
}
document.write(counting());
//8.
function area() {
 var width;
 var height;
 var area;
 width = prompt("Please enter width of rectangle ");
 height = prompt("Please enter height of rectangle ");
 area = width * height;
 return area;
}
document.write(area());

//9.
var length = prompt("Enter length.");
 var width = prompt("Enter width.");
 function area(length, width) {
 return length * width;
 }
 document.writeln('The area is ' + area(length, width)); 
//10. 
var word = prompt("Enter a word: ")
 function palandrome(word) {
 var pal = "";
 for (var i = word.length - 1; i >= 0; i--) {
 pal += word[i];
 }
 if( pal === word){
 document.write("It's a palandrome!")
 }
 else{
 document.write("It's not a palandrome!")
 }
 }
 var result = palandrome(word);
 document.write(result)
//11.
var data = 'the quick brown fox';

function capital(str){
return str.replace(/\b\w/g,function(x){
 return x.toUpperCase(x);
});
}
alert(capital(data)); 
//12.
function longestWord(string) {
 var str = string.split(" ");
 var longest = 0;
 var word = null;
 str.forEach(function(str) {
 if (longest < str.length) {
 longest = str.length;
 word = str;
 }
 });
 return word;
}
alert(longestWord("Web Development Tutorial")); 
//13.
//14. 
//==========CHAPTER 35-38 "FUNCTION "==========ENDS