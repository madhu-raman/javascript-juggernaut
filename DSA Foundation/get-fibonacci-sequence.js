// 👋 Hey there, Programming Planeteers! 👋

// ❓ PROBLEM HEADING ❓
// Return an array of the first n Fibonacci numbers.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an input n, write a function to return an array of the first n Fionacci numbers.
// A Fibonacci sequence is written as:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
// After that, every successive term is defined as the sum of the previous two terms.
// Note: First term is always 0 and second term is always 1.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any of the constraints, return "Invalid".

// 🛑 CONSTRAINTS - MUST BE VALIDATED 🛑
// Input n can only be a positive integer.
// n can range from 1 to 100.
// Blank spaces, special characters, alphabets are not allowed.

// 🖨️ OUTPUT FORMAT 🖨️
// For input n, return an array of size n containing the first n Fibonacci numbers.
// If the given input doesn't meet any given constraint, then return "Invalid".

// 🧪 SAMPLE INPUT 1 🧪
// n = 1
// 👌 SAMPLE OUTPUT 1 👌
// [0]

// 🧪 SAMPLE INPUT 2 🧪
// n = 101
// 👌 SAMPLE OUTPUT 2 👌
// Invalid

// 🧪 SAMPLE INPUT 3 🧪
// n = 5
// 👌 SAMPLE OUTPUT 3 👌
// [0 1 1 2 3]

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
// n = 0
// 👌 SAMPLE OUTPUT 7 👌
// Invalid

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function getFibonacciSequence (n) {
    if (typeof(n) !== "number" || n % 1 !== 0 || n < 1 || n > 100)
        return "Invalid";
    let first = 0;
    let fibonacci = [first];
    if (n >= 2) {
        let second = 1;
        fibonacci.push(second);
        for (let i = 3; i <= n; i++) {
            let third = first + second;
            fibonacci.push(third);
            first = second;
            second = third;
        }
    }
    return fibonacci;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(n)

// 🙏 NAMASTE - May your debugging be swift, giving you a lift! 🙏