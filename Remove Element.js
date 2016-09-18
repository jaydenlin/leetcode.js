/**
 * Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var cur = 0;
    var removeCount =0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[cur]=nums[i];
            cur++;    
        }else{
            removeCount++;
        }
    }
    for(var j=0;j<removeCount;j++){
        nums.pop();
    }
   
};