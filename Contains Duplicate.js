/**
 * Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Subscribe to see which companies asked this question
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var i = 0,
        isDuplicate = false,
        map = {};
    
    for(i;i<nums.length;i++){
        if(map[nums[i]]){
            isDuplicate = true;
            break;  
        }else{
            map[nums[i]]=true;
        }
    }
    return isDuplicate;
   
};