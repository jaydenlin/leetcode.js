/**
 * Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = new Set();
    nums1.forEach(function(num1){
        if(nums2.indexOf(num1)!==-1){
            map.add(num1);
        }
    }); 
    return Array.from(map);
};