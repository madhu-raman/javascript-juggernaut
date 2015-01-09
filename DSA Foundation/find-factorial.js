// 👋 Hi, Algorithm Architects! 👋

// ❓ PROBLEM HEADING ❓
// Find the factorial of a given number.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an input n, write a function to calculate and return its factorial.
// Factorial of a number n is calculated by multiplying all positive integers from 1 to n.
// Factorial of 0 is 1.
// Factorial doesn't exist for negative numbers.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any constraint, return "Invalid".

// 🛑 CONSTRAINTS - MUST BE VALIDATED 🛑
// Input n should be a whole number.
// n should be less than or equal to 999.
// Special characters, alphabets, decimal numbers, and fractions are not allowed.

// 🖨️ OUTPUT FORMAT 🖨️
// For a valid input n, return the factorial of n.
// If the given input doesn't meet any constraint, then return "Invalid".

// 🧪 SAMPLE INPUT 1 🧪
// n = 0
// 👌 SAMPLE OUTPUT 1 👌
// 1

// 🧪 SAMPLE INPUT 2 🧪
// n = 5
// 👌 SAMPLE OUTPUT 2 👌
// 120

// 🧪 SAMPLE INPUT 3 🧪
// n = -3
// 👌 SAMPLE OUTPUT 3 👌
// Invalid

// 🧪 SAMPLE INPUT 4 🧪
// n = 1.2
// 👌 SAMPLE OUTPUT 4 👌
// Invalid

// 🧪 SAMPLE INPUT 5 🧪
// n = 2/3
// 👌 SAMPLE OUTPUT 5 👌
// Invalid

// 🧪 SAMPLE INPUT 6 🧪
// n = 1@23
// 👌 SAMPLE OUTPUT 6 👌
// Invalid

// 🧪 SAMPLE INPUT 7 🧪
// n = 10
// 👌 SAMPLE OUTPUT 7 👌
// 3628800

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function findFactorial (n) {
    if (typeof(n) !== "number" || n % 1 !== 0 || n < 0 || n > 999)
        return "Invalid";
    let factorial = 1;
    for (let i = 2; i <= n; i++)
        factorial *= i;
    return factorial;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your software shine and never decline! 🙏