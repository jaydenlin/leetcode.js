/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map ={},
        ans =[],
        i=0,
        v,
        remainedValue;
    for(i; i < nums.length; i++){
        v = nums[i];
        remainedValue = target - v;
        if(remainedValue in map){
            ans.push(map[remainedValue]);
            ans.push(i);
            //use for loop so that I can use break to escape 
            break;
        }else{
            //use map to save previous values to prevent using double loops
            map[v]=i;
        }
    }    
    
    return ans;
};