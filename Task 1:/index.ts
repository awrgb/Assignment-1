class SupermarketSimulator {
     // Scenario 1 - Buying Groceries
     static buyGroceries(): void {
         console.log("Welcome to the supermarket!");
         
         let totalBill: number = 0;
 
         // Buying fruits or vegetables
         const choice: string = "fruits"; // Change to "vegetables" for testing vegetables scenario
 
         if (choice === "fruits") {
             console.log("You are in the fruits section.");
             // Simulate buying fruits
             const fruits = ["Apple", "Banana", "Orange"];
             for (const fruit of fruits) {
                 const price = Math.floor(Math.random() * 10) + 1; // Random price between 1 and 10
                 console.log(`- ${fruit}: $${price}`);
                 totalBill += price;
             }
         } else {
             console.log("You are in the vegetables section.");
             // Simulate buying vegetables
             const vegetables = ["Carrot", "Broccoli", "Spinach"];
             for (const vegetable of vegetables) {
                 const price = Math.floor(Math.random() * 10) + 1; // Random price between 1 and 10
                 console.log(`- ${vegetable}: $${price}`);
                 totalBill += price;
             }
         }
 
         console.log(`Total Bill: $${totalBill.toFixed(2)}`);
     }
 
     // Scenario 2 - Checking Discounts
     static applyDiscount(totalBill: number): void {
         let discountedTotal: number = totalBill;
 
         // Apply discount based on total bill amount
         if (totalBill > 20) {
             discountedTotal *= 0.9; // 10% discount
             console.log("Congratulations! You qualify for a 10% discount.");
         } else {
             console.log("No discount applied.");
         }
 
         console.log(`Discounted Total: $${discountedTotal.toFixed(2)}`);
     }
 
     // Scenario 3 - Checkout Process
     static checkoutProcess(): void {
         console.log("Proceeding to checkout...");
 
         // Simulate payment options
         const paymentOptions = ["Credit Card", "Debit Card", "Cash"];
         for (const option of paymentOptions) {
             console.log(`- ${option}`);
         }
 
         // Ask for the preferred payment method
         let paymentMethod: string = "Credit Card"; // Change for testing different payment methods
 
         // Display confirmation based on the chosen payment method
         switch (paymentMethod) {
             case "Credit Card":
                 console.log("Payment successful with Credit Card. Thank you!");
                 break;
             case "Debit Card":
                 console.log("Payment successful with Debit Card. Thank you!");
                 break;
             case "Cash":
                 console.log("Please pay with exact change. Thank you!");
                 break;
             default:
                 console.log("Invalid payment method.");
         }
     }
 }
 
 // Test the scenarios
 SupermarketSimulator.buyGroceries();
 SupermarketSimulator.applyDiscount(25); // Test with a total bill amount
 SupermarketSimulator.checkoutProcess();
 
