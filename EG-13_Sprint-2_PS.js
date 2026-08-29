// 1. Reverse a String 
function reverseString(str) {
    let revstr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revstr = revstr + str[i]
    }
    return revstr
}



// 2. Find Maximum 
function findMax(nums) {
    let mxnum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > mxnum) {
            mxnum = nums[i]
        }
    }
    return mxnum
}



// 3. Check for Palindrome 
function isPalindrome(str) {
    let revstr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revstr = revstr + str[i]
    }

    if (str == revstr) {
        return true;
    } else {
        return false;
    }
}



// 4. Sum Array Elements 
function sumArray(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    return sum
}



// 5. Count Vowels 
function countVowels(str) {
    str = str.toLowerCase();
    const allVowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (allVowels.includes(str[i])) {
            count++
        }
    }
    return count
}



// 6. Two Sum 
function twoSum(nums, target) {
    for (const fn in nums) {
        for (const sn in nums) {
            if (+sn != +fn && nums[fn] + nums[sn] === target) {
                return [+fn, +sn];
            }
        }
    }
}



// 7. Flatten a Nested Array 
function flattenArray(arr) {
    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            finalArr = finalArr.concat(flattenArray(arr[i]))
        } else {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}



// 8. Group Anagrams 
function groupAnagrams(strs) {
}



// 9. Longest Substring Without Repeating Characters 
function lengthOfLongestSubstring(s) {
}



// 10. Deep Clone an Object 
function deepClone(obj) {
}