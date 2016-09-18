/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reversePrint=function(head) {
    if(head===null){
        return;
    }
    reversePrint(head.next);
    console.log(head.val);
}