// Scenario 1 Sum s
function add(num1 , num2 )  {
     return num1 + num2;
 }
 

 let resultadd = add(5, 5 ); 
 console.log("To add return answer is: " + resultadd);

 // Scenario 2 Check Even or Odd
 function checkEvenOrOdd(num )  {
     return num % 2 === 0 ? "Even" : "Odd";
 }
 
 let resultevenodd = checkEvenOrOdd(5);
 console.log("The answer is: " + resultevenodd);

 // Scenario 3 Calculate Area
 function calculateArea(width , height )  {
     return width * height;
 }

 let resultcalculatearea = calculateArea(700, 500);
 console.log("The answer is: " + resultcalculatearea);
 
 // Scenario 4  Reversal
 function reverse(input )  {
     return input.split('').reverse().join('');
 }

 let resultreverse = reverse("Hello World!");
     console.log("The answer is: " + resultreverse); 
 // Scenario 5 Temperature Conversion
 function convertCelsiusToFahrenheit(celsius )  {
     return (celsius * 9 / 5) + 32;
 }

 let resultconvertCelsiusToFahrenheit = convertCelsiusToFahrenheit(20);
     console.log("The answer is: " + resultconvertCelsiusToFahrenheit);
 );
 
