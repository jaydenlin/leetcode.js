/**
 * Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(root, val) {
    var keeper = new ListNode(null);
    keeper.next = root;
    var head = keeper
    
    if(root === null){
        return root;
    }
   
    while(head.next!==null){
        if(head.next.val === val){
            head.next = head.next.next;
        }else{
            head = head.next;
        }
    }
    
    return keeper.next;
};