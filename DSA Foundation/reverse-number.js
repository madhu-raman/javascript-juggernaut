// 👋 Ahoy, Tech Titans! 👋

// ❓ PROBLEM HEADING ❓
// Reverse the digits of a given number.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given a whole number n, write a function to find its reverse and return it.
// Output should also be a whole number, so the output can't have any leading zeroes.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any of the constraints, return "Invalid".

// 🛑 CONSTRAINTS - MUST BE VALIDATED 🛑
// Number should be a whole number.
// It can range from 0 to 99999.
// Special characters, spaces, decimal numbers, alphabets are not allowed.

// 🖨️ OUTPUT FORMAT 🖨️
// Return a number that's the reverse of the given number.
// If the given input doesn't meet any constraint, then return "Invalid".


// 🧪 SAMPLE INPUT 1 🧪
// n = 1000
// 👌 SAMPLE OUTPUT 1 👌
// 1

// 🧪 SAMPLE INPUT 2 🧪
// n = 12345
// 👌 SAMPLE OUTPUT 2 👌
// 54321

// 🧪 SAMPLE INPUT 3 🧪
// n = -1
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
// n = 5
// 👌 SAMPLE OUTPUT 7 👌
// 5

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function reverseNumber (n) {
    if (n % 1 !== 0 || n < 0 || n > 99999 || typeof(n) !== "number")
        return "Invalid";
    let reversed = 0;
    while (n > 0) {
        reversed = (reversed * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return reversed;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(log(n))

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your programs be snappy, not sappy! 🙏