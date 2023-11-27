// Scenario 1: Sum numbers
function add(num1: number, num2: number): number {
     return num1 + num2;
 }
 

 let resultadd = add(5, 5 ); 
 console.log("To add return answer is :" + resultadd);

 // Scenario 2: Check Even or Odd
 function checkEvenOrOdd(num: number): string {
     return num % 2 === 0 ? "Even" : "Odd";
 }
 
 let resultevenodd = checkEvenOrOdd(5);
 console.log("The answer is " + resultevenodd);

 // Scenario 3: Calculate Area
 function calculateArea(width: number, height: number): number {
     return width * height;
 }

 let resultcalculatearea = calculateArea(700, 500);
 console.log("The answer is" + resultcalculatearea);
 
 // Scenario 4: String Reversal
 function reverseString(inputString: string): string {
     return inputString.split('').reverse().join('');
 }

 let resultreversestring = reverseString("Hello World!");
     console.log("The answer is" + resultreversestring); 
 // Scenario 5: Temperature Conversion
 function convertCelsiusToFahrenheit(celsius: number): number {
     return (celsius * 9 / 5) + 32;
 }

 let resultconvertCelsiusToFahrenheit = convertCelsiusToFahrenheit(20);
     console.log("The answer is: " + resultconvertCelsiusToFahrenheit);
 
 
