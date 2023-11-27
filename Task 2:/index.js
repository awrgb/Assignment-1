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
 
 // Scenario 1 - Modify Array with Methods
 const initialArray  = [1, 2, 3, 4, 5];
 console.log("Initial Array", initialArray);
 
 initialArray.push(6, 7); // Add elements to the end
 console.log("After push", initialArray);
 
 initialArray.pop(); // Remove the last element
 console.log("After pop", initialArray);
 
 initialArray.shift(); // Remove the first element
 console.log("After shift", initialArray);
 
 initialArray.unshift(0); // Add elements to the beginning
 console.log("After unshift", initialArray);
 
 // Scenario 2 - Subarray Creation
 const originalArray  = [10, 20, 30, 40, 50];
 console.log("Original Array", originalArray);
 
 // Create a subarray using splice
 const splicedArray  = originalArray.splice(1, 3);
 console.log("Subarray using splice", splicedArray);
 console.log("Original Array after splice", originalArray);
 
 // Create a subarray using slice
 const slicedArray  = originalArray.slice(1, 3);
 console.log("Subarray using slice", slicedArray);
 console.log("Original Array after slice", originalArray);
 
