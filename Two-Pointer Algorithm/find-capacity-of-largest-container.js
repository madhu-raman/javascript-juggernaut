// 👋 Hello, Digital Denizens! 👋

// ❓ PROBLEM HEADING ❓
// Determine the capacity of the largest container.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// You are given an array of N non-negative integers where each represents the height of a
// line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the
// diagram.
// Diagram URL: https://tinyurl.com/maximum-capacity-container
// Find two lines, which together with the x-axis forms a container, such that the
// container holds the most water. Assume the width of lines to be negligible.
// Note: You may not slant the container and N is at least 2.
// Assume the input is clean (constraints are met). Need not validate the input.

// 🖨️ OUTPUT FORMAT 🖨️
// Return a single integer denoting the capacity of the largest container.

// 🛑 CONSTRAINTS - ASSUME ALL ARE MET 🛑
// 2 <= N <= 10^6

// 🧪 SAMPLE INPUT 1 🧪
// [1 8 6 2 5 4 8 3 7]
// 👌 SAMPLE OUTPUT 1 👌
// 49

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        if (area > maxArea)
            maxArea = area;
        if (height[left] <= height[right])
            left++;
        else
            right--;
    }
    return maxArea
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your functions be sleek, not weak! 🙏