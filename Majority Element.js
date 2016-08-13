/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var map = {};
    var i = 0;
    var len = nums.length;
    var limit = len/2;
   
    if(len === 1){
        return nums[0];
    }
   
    for(i;i<len;i++){
        if( map[nums[i]]){
            map[nums[i]] = map[nums[i]] + 1;
            if (map[nums[i]] > limit){
                return nums[i];
            }
        }else{
            map[nums[i]] = 1;
        }
       
    }
 