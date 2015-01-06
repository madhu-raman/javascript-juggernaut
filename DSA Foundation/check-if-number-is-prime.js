// 👋 What's up, Code Conjurers? 👋

// ❓ PROBLEM HEADING ❓
// Check if the given number is a prime number.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an input n, write a function to check if it is prime.
// Conditions for a number to be prime:
// a) It should be an integer greater than 1.
// b) It shouldn't have more than 2 factors.
// (It should be divisible only by 1 and the number n itself)
// Negative numbers are not prime.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any of the constraints, return "Invalid".

// 🛑 CONSTRAINTS - MUST BE VALIDATED 🛑
// Decimal numbers, blank spaces, special characters, alphabets are not allowed.
// n should be less than or equal to 1000000.

// 🖨️ OUTPUT FORMAT 🖨️
// If the integer is prime, return boolean "true".
// If the integer is not prime, return boolean "false".
// If the given input doesn't meet any constraint, then return "Invalid".

// 🧪 SAMPLE INPUT 1 🧪
// n = 0
// 👌 SAMPLE OUTPUT 1 👌
// false

// 🧪 SAMPLE INPUT 2 🧪
// n = 1
// 👌 SAMPLE OUTPUT 2 👌
// false

// 🧪 SAMPLE INPUT 3 🧪
// n = -3
// 👌 SAMPLE OUTPUT 3 👌
// false

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
// n = 1999
// 👌 SAMPLE OUTPUT 7 👌
// true

// 🧪 SAMPLE INPUT 8 🧪
// n = 1000001
// 👌 SAMPLE OUTPUT 8 👌
// Invalid

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function isPrime (n) {
    if (typeof(n) !== "number" || n % 1 !== 0 || n > 1000000)
        return "Invalid";
    if (n <= 1 || (n > 2 && n % 2 === 0))
        return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(sqrt(n))

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your coding be clever, now and forever! 🙏