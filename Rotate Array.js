/**
 * Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function(nums,i,j){
    var temp = nums[i];
    nums[i] =nums[j];
    nums[j] = temp;
}

var reverse = function(nums,start,end){
    var n = [];
    for(var i=end;i>=start;i--){
        n.push(nums[i]);
    }
    while(start<end){
        swap(nums,start,end);
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    k = k%nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
};