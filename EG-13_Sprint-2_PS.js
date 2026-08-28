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
}



// 4. Sum Array Elements 
function sumArray(nums) {
}



// 5. Count Vowels 
function countVowels(str) {
}



// 6. Two Sum 
function twoSum(nums, target) {
}



// 7. Flatten a Nested Array 
function flattenArray(arr) {
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