// Assalamualaikum @everyone 👋

// 🚀 Day 24 Challenge: Start Coding! 🚀

// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function printNumWithLet() {
    for(let i = 0; i <= 5 ;i++){
        console.log(i);
    }
    // i is not accessible here , means outside the loop , the reason is that it is defined with let
}
printNumWithLet();

// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let year = 2020;
year = 2023;
console.log(year);

const car = "Suzuki"
try{
    car = "Honda"
} catch (error){
    console.log("Error: Can not reassign a `const`-decleared variable");
}

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let letBlock = "accessible inside the block";
    const constBlock = "It's also accessible inside the block";
    console.log(letBlock);
    console.log(constBlock);  
}
try {
    console.log(letBlock);
} catch (error){
    console.log("`letBlock`is not accessible outside the block.");
} 
try {
    console.log(constBlock);
} catch(error){
    console.log("`constBlock`is not accessible outside the block.");
}
