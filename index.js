let sum = 0;

// Get the number of numbers from the user
let noOfNumbers = 
parseInt(prompt("Enter the number of numbers:"));

// Loop to get input numbers and calculate the sum
for (let i = 0; i < noOfNumbers; i++)
{
    let number = 
    parseFloat(prompt("Enter a number"));
    sum = sum + number;
}

// calculate the average
let average = sum/noOfNumbers;

//Display the result
console.log("The average is: " + average);
alert("The average is: " + average);


