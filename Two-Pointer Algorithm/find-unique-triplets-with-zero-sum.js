// 👋 Greetings, Git Guardians! 👋

// ❓ PROBLEM HEADING ❓
// Find unique triplets with sum zero

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an array *nums*, find all unique triplets (group of 3 numbers) such that their sum
// is 0. There should be no duplicates i.e. no triplet should be repeated.
// Assume the input is clean (constraints are met). Need not validate the input.

// 🖨️ OUTPUT FORMAT 🖨️
// Return an array of arrays
// You must return all such unique triplets which sum to 0 from the given array.

// 🛑 CONSTRAINTS - ASSUME ALL ARE MET 🛑
// 0 <= Length of array <= 10^3
// 0 <= | nums[i] | <= 10^6, where nums[i] represents the value of each element in the array

// 🧪 SAMPLE INPUT 1 🧪
// nums = [-1 0 1 2 -1 -4]
// 👌 SAMPLE OUTPUT 1 👌
// [[-1 0 1]
//  [-1 -1 2]]

// 🧪 SAMPLE INPUT 2 🧪
// nums = [-3 0 1 2 -1 1 -2]
// 👌 SAMPLE OUTPUT 2 👌
// [[-3 1 2]
//  [-2 0 2]
//  [-2 1 1]
//  [-1 0 1]]

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let left = 0; left <= nums.length - 3; left++) {
        if (left > 0 && nums[left] === nums[left - 1])
            continue;
        let mid = left + 1;
        let right = nums.length - 1;
        while (mid < right) {
            if (mid > left + 1 && nums[mid] === nums[mid - 1]) {
                mid++;
                continue;
            }
            if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
                right--;
                continue;
            }
            let sum = nums[left] + nums[mid] + nums[right];
            if (sum === 0) {
                let triplet = [];
                triplet.push(nums[left], nums[mid], nums[right]);
                result.push(triplet);
                mid++;
            }
            else if (sum < 0)
                mid++;
            else
                right--;
        }
    }
    return result;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n^2)

// ⬅️ SPACE COMPLEXITY ➡️
// O(n)

// 🙏 NAMASTE - May your projects be grand, not bland! 🙏