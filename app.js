// Chapter 21-25: Task 1
// var first = prompt("Enter your first name");
// var last = prompt ("Enter your last name");
// var fullName = first + " " + last;
// alert ("Greetings "+fullName + "!");

// Chapter 21-25: Task 2
// var phone = prompt("Enter your favorite mobile phone model");
// var length = phone.length;
// document.write("My favorite phone is: "+ phone + "<br>");
// document.write("Length of string: "+ length);

// Chapter 21-25: Task 3
// var string = "Pakistani";
// var index = string.indexOf("n");
// document.write("String: " + string + "<br>");
// document.write("Index of 'n': "+ index);

// Chapter 21-25: Task 4
// var string = "Hello World";
// var index = string.lastIndexOf("l");
// document.write("String: " + string + "<br>");
// document.write("Index of 'l': "+ index);

// Chapter 21-25: Task 5
// var string = "Pakistani";
// var char = string.charAt(3);
// document.write("String: " + string + "<br>");
// document.write("Character at index 3: "+ char);

// Chapter 21-25: Task 6
// var first = prompt("Enter your first name");
// var last = prompt ("Enter your last name");
// var fullName = first.concat(last)
// alert ("Greetings "+fullName + "!");

// Chapter 21-25: Task 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam" );
// document.write("City: "+ city + "<br>");
// document.write("After replacement: "+ newCity)

// Chapter 21-25: Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g, "&");
// document.write(message);

// Chapter 21-25: Task 9
// var str1 = "472";
// document.write("Value: "+ str1 + "<br>");
// document.write("Type: " + typeof str1 + "<br>");
// var num1 = parseInt(str1);
// document.write("Value: "+ num1 + "<br>");
// document.write("Type: " + typeof num1 + "<br>");

// Chapter 21-25: Task 10
// var input = prompt("Enter a string");
// document.write("User input: " + input + "<br>");
// document.write("Upper case: " + input.toUpperCase()  )

// Chapter 21-25: Task 11
// var input = prompt("Enter a string");
// document.write("User input: " + input + "<br>");
// var firstChar = input.slice(0,1);
// var remChar = input.slice(1,)
// document.write("Upper case: " + firstChar.toUpperCase() + remChar.toLowerCase()  )

// Chapter 21-25: Task 12
// var num = 35.36;
// var str = num.toString();
// var string = "";
// for (i = 0; i<str.length; i++){
//     if (str[i] != "."){
//         string = string + str[i];
//     }
// }
// document.write("Number: "+ num + "<br>");
// document.write("Result " + string);

// Chapter 21-25: Task 13
// var userInput = prompt("Enter User Name");
// for (i = 0; i<userInput.length; i++){
//     if (userInput[i] === '@' || userInput[i] === '.' ||userInput[i] === ',' ||userInput[i] === '!' ){
//         alert("Please enter a valid username")
//     }
// }

// Chapter 21-25: Task 14
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order1 = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// order = order1.toLowerCase();
// var flag = 0;
// for (i = 0; i < A.length ; i++ ){
//     if (order === A[i]){
//         document.write(order1 + " is available at index " + i + " in our bakery");
//         flag = 1;
//     }
// }
// if (flag === 0){
//     document.write("We are sorry. "+ order1 + " is not available in our bakery")
// }

// Chapter 21-25: Task 15
// var password = prompt("Enter password ");
// for (i=0; i<password.length; i++){
//     var j = password.charCodeAt(i);
//     if ((j >=48 && j<= 57) || (j>=65 && j<=90)||(j>=97 && j<=122) ){
//         if (password[0] >= "0" && password[0] <= "9"){
//             alert("Password can not begin with a number \n Please enter a valid password");
//             break;
//         }
//         else if (password.length <6){
//             alert("Password must be atleast 6 characters long \n Please enter a valid password");
//             break;
//         }
//     } 
//     else {
//         alert("Password must contain alphabets and numbers \n Please enter a valid password");
//         break;
//     }
// }

// Chapter 21-25: Task 16
// var university = "University of Karachi";
// var res = university.split("");
// for (i=0; i<res.length; i++){
//     document.write(res[i]);
//     document.write("<br>")
// }

// Chapter 21-25: Task 17
// var userInput = prompt("Enter a string");
// var length = userInput.length;
// document.write("User input: "+ userInput + "<br>");
// document.write("Last character of input: "+ userInput[length-1] )

// // Chapter 21-25: Task 18
// var text = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (i=0; i<text.length; i++){
//     if (text.slice(i,i+3) === "the" || text.slice(i,i+3) === "The" ){
//         count = count + 1;
//     }
// }
// document.write("Text: The quick brown fox jumps over the lazy dog <br> There are "+ count + " occurence(s) of the word 'the'" );


// Chapter 26-30: Task 1
// var number = prompt("Enter a number");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number+"<br>");
// document.write("round off value: "+round +"<br>");
// document.write("floor value: "+floor +"<br>");
// document.write("ceil value: "+ceil +"<br>");

// Chapter 26-30: Task 2
// var number = prompt("Enter -ve floating point:");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number+"<br>");
// document.write("round off value: "+round +"<br>");
// document.write("floor value: "+floor +"<br>");
// document.write("ceil value: "+ceil +"<br>");

// Chapter 26-30: Task 3
// var number = prompt("Enter a number");
// var abs = Math.abs(number);
// document.write("The absolute value of "+number+ " is " + abs);

// Chapter 26-30: Task 4
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal*6)+1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("random dice value: "+ numberOfStars);

// Chapter 26-30: Task 5
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal*2)+1;
// var numberOfStars = Math.floor(improvedNum);
// if (numberOfStars === 1){
//     document.write("random dice value: "+ "Heads");    
// }
// else{
//     document.write("random dice value: "+ "Tails");
// }

// Chapter 26-30: Task 6
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal*100)+1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("random number between 1 and 100: "+ numberOfStars);    

// Chapter 26-30: Task 7
// var weight = prompt("Enter your weight in kilograms");
// var weightConv = parseFloat(weight);
// document.write("Th weight of user is "+ weightConv + " kilograms");

// Chapter 26-30: Task 8
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal*10)+1;
// var numberOfStars = Math.floor(improvedNum);
// var guess = +prompt("Enter a number between 1 and 10")
// if (guess === numberOfStars){
//     document.write("Congratulations! you have guesssed it");    
// }
// else{
//     document.write("Try again!");
// }

// Chapter 31-34: Task 1
// var d = new Date();
// document.write(d)

// Chapter 31-34: Task 2
// var d = new Date();
// var currentMonth = d.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
// document.write("Current month: "+ monthNames[currentMonth]);

// Chapter 31-34: Task 3
// var d = new Date();
// var currentDay = d.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is "+ dayNames[currentDay]);

// Chapter 31-34: Task 4
// var d = new Date();
// var currentDay = d.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// if (dayNames[currentDay] === "Sat" || dayNames[currentDay] === "Sun"){
//     document.write("Its Fun day");
// }

// Chapter 31-34: Task 5
// var d = new Date();
// var currentDate = d.getDate();
// if (currentDate >= "1" && currentDate <= "15"){
//     document.write("First-fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// Chapter 31-34: Task 6
// var today = new Date();
// var otherDay = new Date("January 1, 1970");
// var msToday = today.getTime();
// var msOtherDay = otherDay.getTime();
// var msDiff = msToday-msOtherDay ;
// var mDiff = msDiff / (3600000 );
// // dDiff = Math.floor(dDiff);
// document.write("Current Date: " + today + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+msDiff + "<br>")
// document.write("Elapsed minutes since January 1, 1970: "+mDiff)

// Chapter 31-34: Task 7
// var today = new Date();
// var hours = today.getHours();
// if (hours >= 0 && hours <12){
//     document.write(+"It's AM");
// }
// else{
//     document.write("It's PM");
// }

// Chapter 31-34: Task 8
// var laterDate = new Date("Thu December 31, 2020");
// document.write("Later date: "+laterDate);

// Chapter 31-34: Task 9
// var firstRamadan = new Date("June 18, 2015");
// var today = new Date();
// var days = (today.getTime() - firstRamadan.getTime())/(1000*60*60*24) ;
// days = Math.floor(days);
// document.write(days + " days have passed since 1st Ramadan,2015 ")

// Chapter 31-34: Task 10
// var ref = new Date("Dec 05, 2015 22:50:16");
// var date = new Date("Jan 01, 2015");
// var sec = (ref.getTime() - date.getTime())/(1000*60) ;
// sec = Math.ceil(sec);
// document.write("On reference date "+ref + "<br>")
// document.write(sec + " seconds had passed since beginning of 2015 ")
 
// Chapter 31-34: Task 11
// var d = new Date();
// document.write("current date: "+d+"<br>");
// var hours = d.getHours()-1;
// d.setHours(hours)
// document.write("1 hour ago, it was "+d+"<br>");

// Chapter 31-34: Task 12
// var d = new Date();
// document.write("current date: "+d+"<br>");
// var years = d.getFullYear()-100;
// d.setFullYear(years)
// document.write("100 years back, it was "+d+"<br>");

// Chapter 31-34: Task 13
// var age = prompt("Enter your age");
// var d = new Date();
// var currentYear = d.getFullYear();
// var birthYear = currentYear - age ;
// document.write("Your age is " + age + "<br>"  );
// document.write("Your birth year is " + birthYear);

// Chapter 35-38: Task 14
// function tellTime(){
//     var d = new Date();
//     document.write(d);
// }
// tellTime();

// Chapter 35-38: Task 2
// function fullName(first, last){
//     alert("Greetings " + first + " " + last+ "!");
// }
// fullName("humaira", "rana");

// Chapter 35-38: Task 3
// function sum(){
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var sum = num1 + num2;
//     return sum;
// }
// var sum = sum();
// alert("sum is "+ sum)

// Chapter 35-38: Task 4
// function calc(num1, num2, sign){
//     if (sign === "+"){
//         return num1+num2;
//     }
//     else if (sign === "-"){
//         return num1-num2;
//     }
//     else if (sign === "*"){
//         return num2*num1;
//     }
//     else if (sign === "/"){
//         return num1/num2;
//     }    
// }
// var num1 = +prompt("Enter first number");
// var sign = prompt("Enter operation sign");
// var num2 = +prompt("Enter second number");
// result = calc(num1, num2, sign);
// document.write(num1 + sign + num2 +"="+ result);

// Chapter 35-38: Task 5
// function square(number){
//     return number*number;
// }
// var number = +prompt("Enter a number");
// var result = square(number)
// alert("square is "+result)

// Chapter 35-38: Task 6 
// function factorial(n){
//     var ans = 1;
//     if(n == 0 || n == 1){
//         return ans; 
//     }
//     else{
//         for (i = 1; i <= n; i++){
//             ans = ans*i;
//         }
//         return ans;

//     }
// }
// var number = +prompt("Enter a number");
// var result = factorial(number)
// alert("factorial is "+ result)

// Chapter 35-38: Task 7
// function counting(start, end){
//     for (i=start; i<=end; i++){
//         document.write(i + " " );
//     }
// }
// counting(1,100);

// Chapter 35-38: Task 8
// function calculateHypotenuse(base,perp){
    
//     function calculateSquare(num){
//         return num*num;
//     }
//     hyp = calculateSquare(base) + calculateSquare(perp);
//     return Math.sqrt(hyp);
// }
// document.write( calculateHypotenuse(3,4));

// Chapter 35-38: Task 9
// function area(width, height){
//     return width*height;
// }
// document.write("area is " + area(2,4)+"<br>"); // Passing values
// var w = 12;
// var h = 15;
// document.write("another area is"+area(w,h)); // Passing variables

// Chapter 35-38: Task 10
// function palindromeCheck(string){
//     var string2 = "";
//     for (i=string.length-1; i>=0; i--){
//         string2 += string[i];
//     }
//     if (string2 == string){
//         document.write(string + " is a palindrome word");
//     }
// }
// var word = prompt("Enter a word");
// palindromeCheck(word);

// Chapter 35-38: Task 11
// function convFirst(string){
//     var letter = " ";
//     for (i=0; i<string.length; i++){
//         if (letter === " "){
//             letter = string[i];
//             document.write(letter.toUpperCase());    
//         } 
//         else {
//             letter = string[i];
//             document.write(letter);                
//         }
//     }
// }
// convFirst("the quick brown fox");

// Chapter 35-38: Task 12
// function longestWord(str){
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     var word = "";
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//       word = strSplit[i];
//        }
//     }
//     return word;
// }
// var word = longestWord("Web Development Tutorial");
// document.write(word+ " is the longest word");

// Chapter 35-38: Task 13
// function charCounter (string, char){
//     var count = 0;
//     for (i = 0; i<string.length; i++){
//         if (string[i] === char){
//             count ++;
//         }
//     }
//     return count;
// }
// var count = charCounter("JSResources.com","o");
// document.write("'o' occured "+ count+ " times in JSResources.com");

// Chapter 35-38: Task 14
// function calcCircumference(r){
//     var c = 2*3.142*r;
//     return c; 
// }
// function calcArea(r){
//     var a = 3.142*r*r;
//     return a;
// }
// var radius = prompt("Enter radius of circle");
// document.write("The circumference is "+ calcCircumference(radius)+"<br>");
// document.write("The area is "+ calcArea(radius));
